class CreateChromaticOrbs < ActiveRecord::Migration[5.0]
  def change
    create_table :chromatic_orbs do |t|

      t.timestamps
    end
  end
end
