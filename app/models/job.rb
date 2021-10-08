class Job < ApplicationRecord
  belongs_to :company
  has_many :job_skills
  has_many :skills, through: :job_skills
end
