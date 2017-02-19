require File.expand_path('../../PoeCurrency/config/environment',  __FILE__)
require 'open-uri'
require 'nokogiri'


league_types = [
	"Standard",
	"Hardcore",
	"Breach",
	"Hardcore+Breach"
]

currency_offering = {
	"armour..." => "ArmourerScrap",
	"whetst..." => "BlacksmithWhetstone",
	"blessed" => "BlessedOrb",
	"chisel" => "CartographerChisel",
	"chaos" => "ChaosOrb",
	"chrome" => "ChromaticOrb",
	"divine" => "DivineOrb",
	"eternal" => "EternalOrb",
	"exalted" => "ExaltedOrb",
	"gcp" => "GemcutterPrism",
	"bauble" => "GlassblowerBubble",
	"jeweller" => "JewellerOrb",
	"alchemy" => "OrbofAlchemy",
	"alteration" => "OrbofAlteration",
	"augment..." => "OrbofAugmentation",
	"chance" => "OrbofChance",
	"fusing" => "OrbofFusing",
	"regret" => "OrbofRegret",
	"scouring" => "OrbofScouring",
	"transmutty" => "OrbofTransmutation",
	"portal" => "PortalScroll",
	"regal" => "RegalOrb",
	"wisdom" => "ScrollofWisdom",
	"vaal" => "VaalOrb"
}

currency_receiving = {
	"armour..." => "armourer_scrap",
	"whetst..." => "blacksmith_whetstone",
	"blessed" => "blessed_orb",
	"chisel" => "cartographer_chisel",
	"chaos" => "chaos_orb",
	"chrome" => "chromatic_orb",
	"divine" => "divine_orb",
	"eternal" => "eternal_orb",
	"exalted" => "exalted_orb",
	"gcp" => "gemcutter_prism",
	"bauble" => "glassblower_bubble",
	"jeweller" => "jeweller_orb",
	"alchemy" => "orbof_alchemy",
	"alteration" => "orbof_alteration",
	"augment..." => "orbof_augmentation",
	"chance" => "orbof_chance",
	"fusing" => "orbof_fusing",
	"regret" => "orbof_regret",
	"scouring" => "orbof_scouring",
	"transmutty" => "orbof_transmutation",
	"portal" => "portal_scroll",
	"regal" => "regal_orb",
	"wisdom" => "scrollof_wisdom",
	"vaal" => "vaal_orb"
}

# PARSE DOCUMENT BASED ON LEAGUE
# GENERATE IGNS
# GENERATE CURRENCY
# VALIDATE CURRENCY RECORD
# SAVE RECORD IN DATABASE
def parse_html(league)
	url = "http://currency.poe.trade/search?league=#{league}&online=&want=1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20-21-22-23&have=1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20-21-22-23"

	puts "Mining in #{league} league...."
	document = open(url)
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

	puts "Generating Currency..."
	currency_array.each do |div|
		currency_receiving = div.css('.currency-name')[0].inner_text.strip!
		currency_offering = div.css('.currency-name')[1].inner_text.strip!
		trade_ratio= div.css('.displayoffer-middle').inner_text.split(' ')

	end
end

def create_records(receiving, offering, trade_ratio)

end







