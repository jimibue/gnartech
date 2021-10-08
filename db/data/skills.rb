@skillsHash = {
  react: { name: "React" },
  ui: { name: "UI stuff" },
  figma: { name: "Figma" },
  typescript: { name: "Typescript" },
  rails: { name: "Rails" },
  sql: { name: "SQL" },
  react_native: { name: "React Native" },
}

@courses = {
  frontend: { name: "Udemy React Native max",
             description: "React Native with max SCE",
             link: "https://google.com",
             hours: 40,
             stars: 4.2,
             skills: [
    @skillsHash[:react_native],
    @skillsHash[:typescript],
  ] },
  ui: { name: "Udemy UI max",
       description: "Udemy UI max with max SCE",
       link: "https://google.com",
       hours: 40,
       stars: 3,
       skills: [
    @skillsHash[:ui],
    @skillsHash[:figma],
  ] },
  fullStack: { name: "Udemy Full-Stack",
              description: "React, Rails, Postgres, testing",
              link: "https://google.com",
              hours: 39,
              stars: 4.5,
              skills: [
    @skillsHash[:react],
    @skillsHash[:rails],
  ] },

  backend: { name: "Udemy Backend-Stack",
            description: "all the backend things",
            link: "https://google.com",
            hours: 39,
            stars: 4.5,
            skills: [
    @skillsHash[:sql],
    @skillsHash[:rails],
  ] },
}

@paths = {
  frontend: { name: "Frontend", description: "Frontend: React, Redux, React Native, UI/UX", skills: [
    @skillsHash[:react],
    @skillsHash[:typescript],
  ],
              courses: [
    @courses[:frontend],
    @courses[:ui],
  ], hours: 40 },
  fullStack: { name: "Full-Stack", description: "FullStack: React, Rails, Postgres, testing",
               skills: [
    @skillsHash[:react],
    @skillsHash[:rails],
  ],
               courses: [
    @courses[:frontend],
    @courses[:fullStack],
  ], hours: 30 },
  mobile: { name: "Mobile", description: "Create some react native apps", skills: [
    @skillsHash[:react],
    @skillsHash[:react_native],
    @skillsHash[:typescript],
  ],

            courses: [
    @courses[:frontend],
  ], hours: 20 },
}

@companies = {
  mx: { name: "MX" },
  mavenlink: { name: "Mavenlink" },
}

def create_skills
  @skillsHash.each do |key, value|
    Skill.create(name: value[:name])
  end
end

def create_courses
  @courses.each do |key, course|
    course_in_db = Course.create(name: course[:name], description: course[:description], stars: course[:stars], hours: course[:hours], link: course[:link])
    course[:skills].each do |skill|
      SkillCourse.create(skill_id: Skill.where(name: skill[:name])[0].id, course_id: course_in_db.id)
    end
  end
end

def create_paths
  @paths.each do |key, path|
    path_in_db = Path.create(name: path[:name], description: path[:description], hours: path[:hours])
    path[:skills].each do |skill|
      SkillPath.create(skill_id: Skill.where(name: skill[:name])[0].id, path_id: path_in_db.id)
    end
  end
end

def create_course_paths
  @paths.each do |key, path|
    path_in_db = Path.where(name: path[:name])[0]
    path[:courses].each do |course|
      PathCourse.create(course_id: Course.where(name: course[:name])[0].id, path_id: path_in_db.id)
    end
  end
end

def create_companies_and_jobs
  mx = Company.create(name: "MX")
  mavenlink = Company.create(name: "Mavenlink")
  ###
  j1 = mx.jobs.create(title: "Front End Dev", description: "Front end job at MX", link: "https:google.com")
  j1.job_skills.create(skill_id: Skill.where(name: "React")[0].id, desired_level: 2, desired_experience: 6)
  j1.job_skills.create(skill_id: Skill.where(name: "React Native")[0].id, desired_level: 2, desired_experience: 3)
  j1.job_skills.create(skill_id: Skill.where(name: "UI stuff")[0].id, desired_level: 1, desired_experience: 2)
  ####
  j2 = mx.jobs.create(title: "Back End Dev", description: "Back end job at MX", link: "https:google.com")
  j2.job_skills.create(skill_id: Skill.where(name: "Rails")[0].id, desired_level: 2, desired_experience: 3)
  j2.job_skills.create(skill_id: Skill.where(name: "SQL")[0].id, desired_level: 2, desired_experience: 3)
  ####
  j3 = mavenlink.jobs.create(title: "Front End Dev", description: "Front end job at Maven", link: "https:google.com")
  j3.job_skills.create(skill_id: Skill.where(name: "React")[0].id, desired_level: 3, desired_experience: 2)
  j3.job_skills.create(skill_id: Skill.where(name: "React Native")[0].id, desired_level: 2, desired_experience: 4)
  j3.job_skills.create(skill_id: Skill.where(name: "Figma")[0].id, desired_level: 5, desired_experience: 2)

  j4 = mavenlink.jobs.create(title: "back End Dev", description: "Back end job at Maven", link: "https:google.com")
  j4.job_skills.create(skill_id: Skill.where(name: "Rails")[0].id, desired_level: 2, desired_experience: 3)
  j4.job_skills.create(skill_id: Skill.where(name: "SQL")[0].id, desired_level: 2, desired_experience: 3)
end
