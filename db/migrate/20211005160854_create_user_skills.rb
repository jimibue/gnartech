class CreateUserSkills < ActiveRecord::Migration[6.1]
  def change
    create_table :user_skills do |t|
      t.belongs_to :skill, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true
      t.date :started
      t.float :level

      t.timestamps
    end
  end
end
