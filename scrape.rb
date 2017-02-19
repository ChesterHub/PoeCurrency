require 'open-uri'
require 'nokogiri'

breach_url = "http://currency.poe.trade/search?league=Breach&online=&want=1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20-21-22-23&have=1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20-21-22-23"
test_url = "http://currency.poe.trade/search?league=Breach&online=&want=1-2-3-4-5-6&have=1-2-3-4-5-6"

puts "Mining data...."
document = open(test_url)
content = document.read
parsed_content = Nokogiri::HTML(content)

# Create array of divs that contain the information of currency that we need
parsed_currency = parsed_content.css('.displayoffer').css('.row')

# Specifically parse currency conversion info
currency_array = parsed_currency.css('.large-6').css('.displayoffer-primary')

#Specifically parse for IGN
ign_array = parsed_currency.css('.large-12').css('.displayoffer-bottom').css('a')

poe_currency_hash = {
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
	"wisdom" => "ScrollofWisom",
	"vaal" => "VaalOrb"
}

def parse_ign(ign_array)
	igns = []
	puts "Generating IGNs...."
	ign_array.each do |a|
		if a.text.downcase == "contact seller"
		else
			igns << a.text.split(" ")[1]
		end
	end
	return igns
end

def show_currency(currency_arr, ign_arr, currency_hash)
	if ign_arr.length == currency_arr.length
		ign_increment = 0
		currency_arr.each do |div|
			ign = ign_arr[ign_increment]
			currency_receiving = div.css('.currency-name')[0].inner_text.strip!
			currency_offering = div.css('.currency-name')[1].inner_text.strip!
			value = div.css('.displayoffer-middle').inner_text.split(' ')

			if currency_hash[currency_offering]
				puts currency_hash[currency_offering]
				puts "#{value[2]} #{currency_offering}(s) will get you #{value[0]} #{currency_receiving}(s)."
				puts "Message: #{ign} to trade."
				puts "---------------------------------------------------------------------------"
			end
			ign_increment += 1
		end
	else
		puts "Parsing Failed."
	end
	puts currency_arr.length
	puts ign_arr.length
end


def save_record()
end

igns = parse_ign(ign_array)
show_currency(currency_array, igns, poe_currency_hash)


