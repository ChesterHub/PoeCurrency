class CreateOrbofAlterations < ActiveRecord::Migration[5.0]
  def change
    create_table :orbof_alterations do |t|

      t.timestamps
    end
  end
end
