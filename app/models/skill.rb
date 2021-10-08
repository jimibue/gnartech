class Skill < ApplicationRecord
  has_many :skill_paths
  has_many :paths, through: :skill_paths

  has_many :job_skills
  has_many :jobs, through: :job_skills

  has_many :skill_courses
  has_many :courses, through: :skill_courses
end
