class CreateDivineOrbs < ActiveRecord::Migration[5.0]
  def change
    create_table :divine_orbs do |t|

      t.timestamps
    end
  end
end
