class Path < ApplicationRecord
  has_many :skill_paths
  has_many :skills, through: :skill_paths

  has_many :path_courses
  has_many :courses, through: :path_courses
end
