class CreatePaths < ActiveRecord::Migration[6.1]
  def change
    create_table :paths do |t|
      t.string :name
      t.string :description
      t.integer :hours

      t.timestamps
    end
  end
end
