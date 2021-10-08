class SkillCourse < ApplicationRecord
  belongs_to :skill
  belongs_to :course
end
