class CreateCourses < ActiveRecord::Migration[6.1]
  def change
    create_table :courses do |t|
      t.string :name
      t.string :link
      t.float :rating
      t.string :description
      t.float :duration
      t.float :price
      t.string :level
      t.string :course_type

      t.timestamps
    end
  end
end
