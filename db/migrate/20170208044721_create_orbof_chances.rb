class CreateOrbofChances < ActiveRecord::Migration[5.0]
  def change
    create_table :orbof_chances do |t|

      t.timestamps
    end
  end
end
