require File.expand_path('../../config/environment',  __FILE__)
require 'open-uri'
require 'nokogiri'


league_types = [
	"Standard",
	"Hardcore",
	"Breach",
	"Hardcore+Breach"
]

currency_offering = {
	"armour..." => ArmourerScrap,
	"whetst..." => BlacksmithWhetstone,
	"blessed" => BlessedOrb,
	"chisel" => CartographerChisel,
	"chaos" => ChaosOrb,
	"chrome" => ChromaticOrb,
	"divine" => DivineOrb,
	"eternal" => EternalOrb,
	"exalted" => ExaltedOrb,
	"gcp" => GemcutterPrism,
	"bauble" => GlassblowerBubble,
	"jeweller" => JewellerOrb,
	"alchemy" => OrbofAlchemy,
	"alteration" => OrbofAlteration,
	"augment..." => OrbofAugmentation,
	"chance" => OrbofChance,
	"fusing" => OrbofFusing,
	"regret" => OrbofRegret,
	"scouring" => OrbofScouring,
	"transmutty" => OrbofTransmutation,
	"portal" => PortalScroll,
	"regal" => RegalOrb,
	"wisdom" => ScrollofWisdom,
	"vaal" => VaalOrb
}

currency_receiving = {
	"armour..." => :armourer_scrap,
	"whetst..." => :blacksmith_whetstone,
	"blessed" => :blessed_orb,
	"chisel" => :cartographer_chisel,
	"chaos" => :chaos_orb,
	"chrome" => :chromatic_orb,
	"divine" => :divine_orb,
	"eternal" => :eternal_orb,
	"exalted" => :exalted_orb,
	"gcp" => :gemcutter_prism,
	"bauble" => :glassblower_bubble,
	"jeweller" => :jeweller_orb,
	"alchemy" => :orbof_alchemy,
	"alteration" => :orbof_alteration,
	"augment..." => :orbof_augmentation,
	"chance" => :orbof_chance,
	"fusing" => :orbof_fusing,
	"regret" => :orbof_regret,
	"scouring" => :orbof_scouring,
	"transmutty" => :orbof_transmutation,
	"portal" => :portal_scroll,
	"regal" => :regal_orb,
	"wisdom" => :scrollof_wisdom,
	"vaal" => :vaal_orb
}

# PARSE DOCUMENT BASED ON LEAGUE
# GENERATE IGNS
# GENERATE CURRENCY
# ORGANIZE AND VALIDATE CURRENCY RECORD
# SAVE RECORD IN DATABASE
def parse_html(league)
	url = "http://currency.poe.trade/search?league=#{league}&online=&want=1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20-21-22-23-25&have=1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20-21-22-23-25"

	test_url = "http://currency.poe.trade/search?league=#{league}&online=&want=1-2-3-4-5&have=1-2-3-4-5"

	puts "Mining in #{league} league...."
	document = open(eternal_url)
	content = document.read
	parsed_doc = Nokogiri::HTML(content)

	# Create array of divs that contain the information of currency that we need
	return parsed_doc.css('.displayoffer').css('.row')

end

def generate_igns(doc)
	#Specifically parse for IGN
	unparsed_igns = doc.css('.large-12').css('.displayoffer-bottom').css('a')
	parsed_igns = []

	puts "Generating IGNs...."
	unparsed_igns.each do |a|
		if a.text.downcase == "contact seller"
		else
			parsed_igns << a.text.split(" ")[1]
		end
	end
	return parsed_igns
end

def generate_currency(doc)
	# Specifically parse currency conversion info
	currency_array = doc.css('.large-6').css('.displayoffer-primary')
	parsed_currency = []
	# Counter for dummies who use the same orb for offering and receiving
	@duplicate_currencies = 0

	puts "Generating Currency..."
	currency_array.each do |div|
		currency_offering = div.css('.currency-name')[1].inner_text.strip!
		trade_ratio = div.css('.displayoffer-middle').inner_text.split(' ')[0]
		currency_receiving = div.css('.currency-name')[0].inner_text.strip!

		if currency_receiving != currency_offering
			parsed_currency << {
				:offering => currency_offering,
				:trade_ratio => trade_ratio,
				:receiving => currency_receiving
			}
		else
			@duplicate_currencies += 1
		end
	end
	return parsed_currency
end

def organize_records(league_num, ign_array, currency_array, offering_hash, receiving_hash)
	if ign_array.length == (currency_array.length + @duplicate_currencies)
		puts "IGNS and Currency match. Organizing records for saving..."
		record_array = currency_array
		ign_increment = 0

		record_array.each do |hashish|
			hashish[:league_id] = league_num + 1
			hashish[:ign] = ign_array[ign_increment] 
			hashish[:offering] = offering_hash[hashish[:offering]]
			hashish[:receiving] = receiving_hash[hashish[:receiving]]

			ign_increment += 1
		end
	else
		return "IGNS and Currency do not match. Aborting."
	end
	return record_array
end

def create_records(record_array)
	puts "Creating Records..."
	record_array.each do |hashish|

		hashish[:offering].create(
			:league_id => hashish[:league_id],
			:ign => hashish[:ign],
			hashish[:receiving] => hashish[:trade_ratio]
			)
	end
	puts "#{record_array.length} records saved in database."
end

def start_mining(league_array, currency_offering_array, currency_receiving_array)

	league_array.each_with_index do |league, ind|
		parsed_info = parse_html(league)
		timer = sleep(rand(2..20))
		puts "Waiting #{timer} seconds..."
		records = organize_records(
			ind,
			generate_igns(parsed_info),
			generate_currency(parsed_info),
			currency_offering_array,
			currency_receiving_array
			)
		create_records(records)
	end

end

start_mining(league_types, currency_offering, currency_receiving)







