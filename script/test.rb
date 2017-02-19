require File.expand_path('../../PoeCurrency/config/environment',  __FILE__)

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

receiving = "exalted_orb"
offering = "ChaosOrb"
num = 0.0143

orb = ChaosOrb.create!(receiving => num, :ign => "lets go!", :league_id => 3)

# eval("ChaosOrb.Create(receiving => num)")
