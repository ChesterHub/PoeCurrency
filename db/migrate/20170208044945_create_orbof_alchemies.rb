class CreateOrbofAlchemies < ActiveRecord::Migration[5.0]
  def change
    create_table :orbof_alchemies do |t|

      t.timestamps
    end
  end
end
