class CreateEternalOrbs < ActiveRecord::Migration[5.0]
  def change
    create_table :eternal_orbs do |t|

      t.timestamps
    end
  end
end
