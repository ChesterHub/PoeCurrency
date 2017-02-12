require 'faker'

League.create(league_type: "Standard")
League.create(league_type: "Breach")
League.create(league_type: "Hardcore")

30.times do
	ChaosOrb.create(league_id: rand(1..3),blessed_orb: rand(0.1..50.0), cartographer_chisel: rand(0.1..50.0), chromatic_orb: rand(0.1..50.0), divine_orb: rand(0.1..50.0), eternal_orb: rand(0.1..50.0), exalted_orb: rand(0.1..50.0), gemcutter_prism: rand(0.1..50.0), jeweller_orb: rand(0.1..50.0), orbof_alchemy: rand(0.1..50.0), orbof_alteration: rand(0.1..50.0), orbof_chance: rand(0.1..50.0), orbof_fusing: rand(0.1..50.0), orbof_regret: rand(0.1..50.0), orbof_scouring: rand(0.1..50.0), regal_orb: rand(0.1..50.0), vaal_orb: rand(0.1..50.0), scrollof_wisdom: rand(0.1..50.0), portal_scroll: rand(0.1..50.0), armourer_scrap: rand(0.1..50.0), blacksmith_whetstone: rand(0.1..50.0), glassblower_bubble: rand(0.1..50.0), orbof_transmutation: rand(0.1..50.0), orbof_augmentation: rand(0.1..50.0))

	ExaltedOrb.create(league_id: rand(1..3),blessed_orb: rand(0.1..50.0), cartographer_chisel: rand(0.1..50.0), chaos_orb: rand(0.1..50.0), chromatic_orb: rand(0.1..50.0), divine_orb: rand(0.1..50.0), eternal_orb: rand(0.1..50.0), gemcutter_prism: rand(0.1..50.0), jeweller_orb: rand(0.1..50.0), orbof_alchemy: rand(0.1..50.0), orbof_alteration: rand(0.1..50.0), orbof_chance: rand(0.1..50.0), orbof_fusing: rand(0.1..50.0), orbof_regret: rand(0.1..50.0), orbof_scouring: rand(0.1..50.0), regal_orb: rand(0.1..50.0), vaal_orb: rand(0.1..50.0), scrollof_wisdom: rand(0.1..50.0), portal_scroll: rand(0.1..50.0), armourer_scrap: rand(0.1..50.0), blacksmith_whetstone: rand(0.1..50.0), glassblower_bubble: rand(0.1..50.0), orbof_transmutation: rand(0.1..50.0), orbof_augmentation: rand(0.1..50.0))

	BlessedOrb.create(league_id: rand(1..3), cartographer_chisel: rand(0.1..50.0), chaos_orb: rand(0.1..50.0), chromatic_orb: rand(0.1..50.0), divine_orb: rand(0.1..50.0), eternal_orb: rand(0.1..50.0), exalted_orb: rand(0.1..50.0), gemcutter_prism: rand(0.1..50.0), jeweller_orb: rand(0.1..50.0), orbof_alchemy: rand(0.1..50.0), orbof_alteration: rand(0.1..50.0), orbof_chance: rand(0.1..50.0), orbof_fusing: rand(0.1..50.0), orbof_regret: rand(0.1..50.0), orbof_scouring: rand(0.1..50.0), regal_orb: rand(0.1..50.0), vaal_orb: rand(0.1..50.0), scrollof_wisdom: rand(0.1..50.0), portal_scroll: rand(0.1..50.0), armourer_scrap: rand(0.1..50.0), blacksmith_whetstone: rand(0.1..50.0), glassblower_bubble: rand(0.1..50.0), orbof_transmutation: rand(0.1..50.0), orbof_augmentation: rand(0.1..50.0))

	PortalScroll.create(league_id: rand(1..3), blessed_orb: rand(0.1..50.0), cartographer_chisel: rand(0.1..50.0), chaos_orb: rand(0.1..50.0), chromatic_orb: rand(0.1..50.0), divine_orb: rand(0.1..50.0), eternal_orb: rand(0.1..50.0), exalted_orb: rand(0.1..50.0), gemcutter_prism: rand(0.1..50.0), jeweller_orb: rand(0.1..50.0), orbof_alchemy: rand(0.1..50.0), orbof_alteration: rand(0.1..50.0), orbof_chance: rand(0.1..50.0), orbof_fusing: rand(0.1..50.0), orbof_regret: rand(0.1..50.0), orbof_scouring: rand(0.1..50.0), regal_orb: rand(0.1..50.0), vaal_orb: rand(0.1..50.0), scrollof_wisdom: rand(0.1..50.0), armourer_scrap: rand(0.1..50.0), blacksmith_whetstone: rand(0.1..50.0), glassblower_bubble: rand(0.1..50.0), orbof_transmutation: rand(0.1..50.0), orbof_augmentation: rand(0.1..50.0))

end

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
