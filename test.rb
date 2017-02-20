require File.expand_path('../../PoeCurrency/config/environment',  __FILE__)

poe_currency_hash = {
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

receiving = "exalted_orb"
offering = poe_currency_hash["chaos"]
num = 0.0143

# orb1 = offering.create!(receiving => num, :ign => "lets go!", :league_id => 3)

orb2 = offering.create!(:exalted_orb => 0.0144, :blessed_orb => 1, :armourer_scrap => 3, :ign => "lets go!", :league_id => 3)


