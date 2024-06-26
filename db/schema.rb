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

ActiveRecord::Schema[7.1].define(version: 2024_06_26_192844) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "profiles", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "name", null: false
    t.string "profilePic", null: false
    t.string "location", null: false
    t.integer "age", null: false
    t.string "lastSeen", null: false
    t.string "intro", null: false
    t.string "freeTime", null: false
    t.string "accomplishment", null: false
    t.string "education", null: false
    t.string "employment", null: false
    t.string "ideas", null: false
    t.string "lookingFor", null: false
    t.string "linkedIn", null: false
    t.string "technical", null: false
    t.string "readyWithin", null: false
    t.string "hasIdeas", null: false
    t.string "willingToDo", null: false
    t.string "interests", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
