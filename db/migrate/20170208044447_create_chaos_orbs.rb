class CreateChaosOrbs < ActiveRecord::Migration[5.0]
  def change
    create_table :chaos_orbs do |t|

      t.timestamps
    end
  end
end
