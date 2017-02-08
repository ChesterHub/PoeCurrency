class CreateGemcutterPrisms < ActiveRecord::Migration[5.0]
	def change
		create_table :gemcutter_prisms do |t|

			t.decimal :blessed_orb
			t.decimal :cartographer_chisel
			t.decimal :chaos_orb
			t.decimal :chromatic_orb
			t.decimal :divine_orb
			t.decimal :eternal_orb
			t.decimal :exalted_orb
			t.decimal :jeweller_orb
			t.decimal :orbof_alchemy
			t.decimal :orbof_alteration
			t.decimal :orbof_chance
			t.decimal :orbof_fusing
			t.decimal :orbof_regret
			t.decimal :orbof_scouring
			t.decimal :regal_orb
			t.decimal :vaal_orb

			t.timestamps
		end
	end
end