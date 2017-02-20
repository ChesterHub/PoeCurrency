class OrbofAlteration < ApplicationRecord
	belongs_to :league

	validates :league_id, presence: true
	validates :ign, presence: true, uniqueness: {scope: [
		:league_id,
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
		]}
end
