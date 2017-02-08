class CreateRegalOrbs < ActiveRecord::Migration[5.0]
  def change
    create_table :regal_orbs do |t|

      t.timestamps
    end
  end
end
