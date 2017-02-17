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

receiving = "ExaltedOrb"
offering = "ChaosOrb"
num = 0.0143

orb = ChaosOrb.Create(receiving => num)

eval("ChaosOrb.Create(receiving => num)")
