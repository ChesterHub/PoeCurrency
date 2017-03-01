require File.expand_path('../../config/environment',  __FILE__)

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

# receiving = "exalted_orb"
# offering = "ChaosOrb"
# num = 0.0143
# orb = ChaosOrb.create!(receiving => num, :ign => "lets go!", :league_id => 3)

# $redis.set("test3",poe_currency_hash)

# league_types = [
# 	"Standard",
# 	"Hardcore",
# 	"Breach",
# 	"Hardcore+Breach"
# ]

# hashish = {}

# p hashish
# league_types.each do |el|
# 	hashish[el] = {}
# end
# p hashish

y = ChaosOrb.where(league_id: 3).average(:exalted_orb).to_f
p y





