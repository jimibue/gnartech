class Job < ApplicationRecord
  belongs_to :company
  has_many :job_skills
  has_many :skills, through: :job_skills

  #   select title, skill_id, s.name as skill_name, c.name as company_name, j.id as job_id
  # from jobs j
  # left join job_skills js on j.id = js.job_id
  # left join skills s on s.id = js.skill_id
  # inner join companies c on c.id = j.company_id
  def self.all_with_skills
    select("title, skill_id, s.name as skill_name, c.name as company_name, c.about as company_about, j.id as job_id, js.desired_level, js.desired_experience, j.description as job_description")
      .from("jobs j")
      .joins(" left join job_skills js on j.id = js.job_id
        left join skills s on s.id = js.skill_id
        inner join companies c on c.id = j.company_id")
  end
end
