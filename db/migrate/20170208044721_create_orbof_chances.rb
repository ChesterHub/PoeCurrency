class CreateOrbofChances < ActiveRecord::Migration[5.0]
	def change
		create_table :orbof_chances do |t|
			t.references :league
			t.decimal :blessed_orb, :precision => 32, :scale => 8
			t.decimal :cartographer_chisel, :precision => 32, :scale => 8
			t.decimal :chaos_orb, :precision => 32, :scale => 8
			t.decimal :chromatic_orb, :precision => 32, :scale => 8
			t.decimal :divine_orb, :precision => 32, :scale => 8
			t.decimal :eternal_orb, :precision => 32, :scale => 8
			t.decimal :exalted_orb, :precision => 32, :scale => 8
			t.decimal :gemcutter_prism, :precision => 32, :scale => 8
			t.decimal :jeweller_orb, :precision => 32, :scale => 8
			t.decimal :orbof_alchemy, :precision => 32, :scale => 8
			t.decimal :orbof_alteration, :precision => 32, :scale => 8
			t.decimal :orbof_fusing, :precision => 32, :scale => 8
			t.decimal :orbof_regret, :precision => 32, :scale => 8
			t.decimal :orbof_scouring, :precision => 32, :scale => 8
			t.decimal :regal_orb, :precision => 32, :scale => 8
			t.decimal :vaal_orb, :precision => 32, :scale => 8

			t.timestamps
		end
	end
end
