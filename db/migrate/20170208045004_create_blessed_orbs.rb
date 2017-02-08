class CreateBlessedOrbs < ActiveRecord::Migration[5.0]
  def change
    create_table :blessed_orbs do |t|

      t.timestamps
    end
  end
end
