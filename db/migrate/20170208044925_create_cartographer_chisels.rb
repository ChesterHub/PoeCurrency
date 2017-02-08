class CreateCartographerChisels < ActiveRecord::Migration[5.0]
  def change
    create_table :cartographer_chisels do |t|

      t.timestamps
    end
  end
end
