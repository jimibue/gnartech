# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_10_05_160927) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "companies", force: :cascade do |t|
    t.string "name"
    t.string "about"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "courses", force: :cascade do |t|
    t.string "name"
    t.string "link"
    t.float "rating"
    t.string "description"
    t.float "duration"
    t.float "price"
    t.string "level"
    t.string "course_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "enrolloments", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "path_id", null: false
    t.float "progess"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["path_id"], name: "index_enrolloments_on_path_id"
    t.index ["user_id"], name: "index_enrolloments_on_user_id"
  end

  create_table "job_skills", force: :cascade do |t|
    t.bigint "skill_id", null: false
    t.bigint "job_id", null: false
    t.float "desired_level"
    t.float "desired_experience"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["job_id"], name: "index_job_skills_on_job_id"
    t.index ["skill_id"], name: "index_job_skills_on_skill_id"
  end

  create_table "jobs", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.string "link"
    t.bigint "company_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["company_id"], name: "index_jobs_on_company_id"
  end

  create_table "path_courses", force: :cascade do |t|
    t.bigint "course_id", null: false
    t.bigint "path_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["course_id"], name: "index_path_courses_on_course_id"
    t.index ["path_id"], name: "index_path_courses_on_path_id"
  end

  create_table "paths", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.integer "hours"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "skill_courses", force: :cascade do |t|
    t.bigint "skill_id", null: false
    t.bigint "course_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["course_id"], name: "index_skill_courses_on_course_id"
    t.index ["skill_id"], name: "index_skill_courses_on_skill_id"
  end

  create_table "skill_paths", force: :cascade do |t|
    t.bigint "skill_id", null: false
    t.bigint "path_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["path_id"], name: "index_skill_paths_on_path_id"
    t.index ["skill_id"], name: "index_skill_paths_on_skill_id"
  end

  create_table "skills", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "user_jobs", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "job_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["job_id"], name: "index_user_jobs_on_job_id"
    t.index ["user_id"], name: "index_user_jobs_on_user_id"
  end

  create_table "user_skills", force: :cascade do |t|
    t.bigint "skill_id", null: false
    t.bigint "user_id", null: false
    t.date "started"
    t.float "level"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["skill_id"], name: "index_user_skills_on_skill_id"
    t.index ["user_id"], name: "index_user_skills_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "enrolloments", "paths"
  add_foreign_key "enrolloments", "users"
  add_foreign_key "job_skills", "jobs"
  add_foreign_key "job_skills", "skills"
  add_foreign_key "jobs", "companies"
  add_foreign_key "path_courses", "courses"
  add_foreign_key "path_courses", "paths"
  add_foreign_key "skill_courses", "courses"
  add_foreign_key "skill_courses", "skills"
  add_foreign_key "skill_paths", "paths"
  add_foreign_key "skill_paths", "skills"
  add_foreign_key "user_jobs", "jobs"
  add_foreign_key "user_jobs", "users"
  add_foreign_key "user_skills", "skills"
  add_foreign_key "user_skills", "users"
end
