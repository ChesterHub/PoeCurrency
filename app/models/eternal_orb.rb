class EternalOrb < ApplicationRecord
	belongs_to :league

	validates :ign, presence: true
	validates :league_id, presence: true
	# has_one :blessed_orb
	# has_one :cartopgrapher_chisel
	# has_one :chaos_orb
	# has_one :chromatic_orb
	# has_one :divine_orb
	# has_one :exalted_orb
	# has_one :gemcutter_prism
	# has_one :jeweller_orb
	# has_one :orbof_alchemy
	# has_one :orbof_alteration
	# has_one :orbof_chance
	# has_one :orbof_fusing
	# has_one :orbof_regret
	# has_one :orbof_scouring
	# has_one :regal_orb
	# has_one :vaal_orb
end
