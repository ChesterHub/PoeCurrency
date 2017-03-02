require File.expand_path('../../config/environment',  __FILE__)

league_types = [
	"Standard",
	"Hardcore",
	"Breach",
	"Hardcore+Breach"
]

league_num_hash = {
	"Standard" => 1,
	"Hardcore" => 2,
	"Breach" => 3,
	"Hardcore+Breach" => 4
}

currency = [
	ArmourerScrap,
	BlacksmithWhetstone,
	BlessedOrb,
	CartographerChisel,
	ChaosOrb,
	ChromaticOrb,
	DivineOrb,
	EternalOrb,
	ExaltedOrb,
	GemcutterPrism,
	GlassblowerBubble,
	JewellerOrb,
	OrbofAlchemy,
	OrbofAlteration,
	OrbofAugmentation,
	OrbofChance,
	OrbofFusing,
	OrbofRegret,
	OrbofScouring,
	OrbofTransmutation,
	PortalScroll,
	RegalOrb,
	ScrollofWisdom,
	VaalOrb
]

averages = [
	:armourer_scrap,
	:blacksmith_whetstone,
	:blessed_orb,
	:cartographer_chisel,
	:chaos_orb,
	:chromatic_orb,
	:divine_orb,
	:eternal_orb,
	:exalted_orb,
	:gemcutter_prism,
	:glassblower_bubble,
	:jeweller_orb,
	:orbof_alchemy,
	:orbof_alteration,
	:orbof_augmentation,
	:orbof_chance,
	:orbof_fusing,
	:orbof_regret,
	:orbof_scouring,
	:orbof_transmutation,
	:portal_scroll,
	:regal_orb,
	:scrollof_wisdom,
	:vaal_orb
]

validate_hash = {
	ArmourerScrap => :armourer_scrap,
	BlacksmithWhetstone => :blacksmith_whetstone,
	BlessedOrb => :blessed_orb,
	CartographerChisel => :cartographer_chisel,
	ChaosOrb => :chaos_orb,
	ChromaticOrb => :chromatic_orb,
	DivineOrb => :divine_orb,
	EternalOrb => :eternal_orb,
	ExaltedOrb => :exalted_orb,
	GemcutterPrism => :gemcutter_prism,
	GlassblowerBubble => :glassblower_bubble,
	JewellerOrb => :jeweller_orb,
	OrbofAlchemy => :orbof_alchemy,
	OrbofAlteration => :orbof_alteration,
	OrbofAugmentation => :orbof_augmentation,
	OrbofChance => :orbof_chance,
	OrbofFusing => :orbof_fusing,
	OrbofRegret => 	:orbof_regret,
	OrbofScouring => :orbof_scouring,
	OrbofTransmutation => :orbof_transmutation,
	PortalScroll => :portal_scroll,
	RegalOrb => :regal_orb,
	ScrollofWisdom => :scrollof_wisdom,
	VaalOrb => :vaal_orb
}

# League > Orb > orb averages
# for each league, throw in orbs
# for each orb, get all averages of other orbs
def generate_league(league_array)
	hashish = {}
	league_array.each {|league| hashish[league] = {}}
	return hashish
end

def generate_orbs(currency_array, redis_hash)	
	redis_hash.each do |league_key, league_value|
		currency_array.each {|currency| league_value[currency.to_s] = {}} 
	end
	return redis_hash
end

def generate_averages(currency_array, averages_array, league_num_hash, validate_hash, redish_hash)
	main_currency = ""
	league_num = ""
	redish_hash.each do |league_key, league_value|
		league_num = league_num_hash[league_key]
		league_value.each do |currency_key, currency_value|

			currency_array.each {|el| main_currency = el if el.to_s == currency_key}

			averages_array.each do |c|
				if validate_hash[main_currency] != c
					avg = main_currency.where(league_id: league_num).average(c).to_f.round(5)
					currency_value[c.to_s] = avg
				end
			end
		end
	end

end

def save_to_redis(data_hash)
	$redis.del("currency")
	hashish = data_hash.to_json
	$redis.set("currency", hashish)
end

def start_redis_generation(league_types, league_num_hash, currency, averages, validate_hash)
	puts "Generating hash of leagues and orbs..."
	hashish = generate_orbs(currency, generate_league(league_types))
	puts "calculating averages from DB..."
	hashish = generate_averages(currency, averages, league_num_hash, validate_hash, hashish)
	puts "Saving data to Redis server..."
	save_to_redis(hashish)
	puts "WE GUCCI"
end

start_redis_generation(league_types, league_num_hash, currency, averages, validate_hash)






