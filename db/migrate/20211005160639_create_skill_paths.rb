class CreateSkillPaths < ActiveRecord::Migration[6.1]
  def change
    create_table :skill_paths do |t|
      t.belongs_to :skill, null: false, foreign_key: true
      t.belongs_to :path, null: false, foreign_key: true

      t.timestamps
    end
  end
end
