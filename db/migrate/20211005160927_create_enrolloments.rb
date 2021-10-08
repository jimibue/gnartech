class CreateEnrolloments < ActiveRecord::Migration[6.1]
  def change
    create_table :enrolloments do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :path, null: false, foreign_key: true
      t.float :progess

      t.timestamps
    end
  end
end
