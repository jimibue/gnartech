class Course < ApplicationRecord
  has_many :skill_courses
  has_many :skills, through: :skill_courses


  has_many :path_courses
  has_many :paths, through: :path_courses
end
