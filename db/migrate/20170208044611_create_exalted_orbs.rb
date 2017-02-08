class CreateExaltedOrbs < ActiveRecord::Migration[5.0]
  def change
    create_table :exalted_orbs do |t|

      t.timestamps
    end
  end
end
