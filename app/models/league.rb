class League < ApplicationRecord
	has_many :blessed_orbs
	has_many :cartopgrapher_chisels
	has_many :chaos_orbs
	has_many :chromatic_orbs
	has_many :divine_orbs
	has_many :eternal_orbs
	has_many :exalted_orbs
	has_many :gemcutter_prisms
	has_many :jeweller_orbs
	has_many :orbof_alchemys
	has_many :orbof_alterations
	has_many :orbof_chances
	has_many :orbof_fusings
	has_many :orbof_regrets
	has_many :orbof_scourings
	has_many :regal_orbs
	has_many :vaal_orbs
end
