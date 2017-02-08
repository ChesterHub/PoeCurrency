class CreateOrbofRegrets < ActiveRecord::Migration[5.0]
  def change
    create_table :orbof_regrets do |t|

      t.timestamps
    end
  end
end
