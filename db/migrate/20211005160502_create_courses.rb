class CreateCourses < ActiveRecord::Migration[6.1]
  def change
    create_table :courses do |t|
      t.string :name
      t.string :link
      t.float :stars
      t.string :description
      t.integer :hours

      t.timestamps
    end
  end
end
