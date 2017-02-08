class CreateOrbofFusings < ActiveRecord::Migration[5.0]
  def change
    create_table :orbof_fusings do |t|

      t.timestamps
    end
  end
end
