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
             duration: 40,
             rating: 4.2,
             level: "No Experience",
             price: 0,
             course_type: "Video Course",
             skills: [
    @skillsHash[:react_native],
    @skillsHash[:typescript],
  ] },
  ui: { name: "Udemy UI max",
       description: "Udemy UI max with max SCE",
       link: "https://google.com",
       duration: 19,
       rating: 3.2,
       level: "Student",
       price: 10.99,
       course_type: "Video Course",
       skills: [
    @skillsHash[:ui],
    @skillsHash[:figma],
  ] },
  fullStack: { name: "React Hooks Article",
              description: "React, Hooks",
              link: "https://google.com",
              duration: 0.5,
              rating: 3.2,
              level: "Student",
              price: 1.99,
              course_type: "Article",
              skills: [
    @skillsHash[:react],
  ] },

  backend: { name: "Some Youtube Vid",
            description: "all the backend things",
            link: "https://google.com",
            duration: 3.5,
            rating: 3.2,
            level: "Grad",
            price: 0,
            course_type: "Video",
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
    course_in_db = Course.create(name: course[:name], description: course[:description], rating: course[:rating], duration: course[:duration], link: course[:link], course_type:course[:course_type], price: course[:price],level:course[:level])
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
  mx = Company.create(name: "MX", about:"At MX, we’re all about creating value. We believe finance can be simpler, more useful, and even enjoyable. We’re passionate about what we do, we have fun, and we trust each other as we work hard. It’s a good life."
  )
  mavenlink = Company.create(name: "Mavenlink",  about:"At MX, we’re all about creating value. We believe finance can be simpler, more useful, and even enjoyable. We’re passionate about what we do, we have fun, and we trust each other as we work hard. It’s a good life.")
  ###
  j1 = mx.jobs.create(title: "Front End Dev", description: "We are seeking a Full Stack Web Developer specializing in development and maintenance of SharePoint and Joomla Websites. This work may be performed independently or within a team environment. The Customer is seeking a candidate with polished skills in concept development and execution while managing a moderate to heavy workload. The Web Developer will have experience developing customer SharePoint and Joomla websites. Work will include developing new SharePoint websites and conducting administration and maintenance of existing SharePoint websites and applications.", link: "https:google.com")
  j1.job_skills.create(skill_id: Skill.where(name: "React")[0].id, desired_level: 2, desired_experience: 6)
  j1.job_skills.create(skill_id: Skill.where(name: "React Native")[0].id, desired_level: 2, desired_experience: 3)
  j1.job_skills.create(skill_id: Skill.where(name: "UI stuff")[0].id, desired_level: 1, desired_experience: 2)
  ####
  j2 = mx.jobs.create(title: "Back End Dev", description: "Back end job at MX J2", link: "https:google.com")
  j2.job_skills.create(skill_id: Skill.where(name: "Rails")[0].id, desired_level: 2, desired_experience: 3)
  j2.job_skills.create(skill_id: Skill.where(name: "SQL")[0].id, desired_level: 2, desired_experience: 3)
  ####
  j3 = mavenlink.jobs.create(title: "Front End Dev @", description: "Identifies risk, writes test plans where appropriate, and performs testing on tasks needed to be completed within the timelines of a defined sprint. Ensures conformance of software development life cycle processes to requirements, standards, and procedures", link: "https:google.com")
  j3.job_skills.create(skill_id: Skill.where(name: "React")[0].id, desired_level: 3, desired_experience: 2)
  j3.job_skills.create(skill_id: Skill.where(name: "React Native")[0].id, desired_level: 2, desired_experience: 4)
  j3.job_skills.create(skill_id: Skill.where(name: "Figma")[0].id, desired_level: 5, desired_experience: 2)

  j4 = mavenlink.jobs.create(title: "back End Dev 2", description: "Back end job at Maven J4", link: "https:google.com")
  j4.job_skills.create(skill_id: Skill.where(name: "Rails")[0].id, desired_level: 2, desired_experience: 3)
  j4.job_skills.create(skill_id: Skill.where(name: "SQL")[0].id, desired_level: 2, desired_experience: 3)
end
