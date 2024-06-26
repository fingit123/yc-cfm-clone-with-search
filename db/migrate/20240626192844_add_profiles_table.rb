class AddProfilesTable < ActiveRecord::Migration[7.1]
  def change
    create_table :profiles, id: :uuid do |t|
      t.string :name, null:false
      t.string :profilePic, null:false
      t.string :location, null:false
      t.integer :age, null:false
      t.string :lastSeen, null:false
      t.string :intro, null:false
      t.string :freeTime, null:false
      t.string :accomplishment, null:false
      t.string :education, null:false
      t.string :employment, null:false
      t.string :ideas, null:false
      t.string :lookingFor, null:false
      t.string :linkedIn, null:false
      t.string :technical, null:false
      t.string :readyWithin, null:false
      t.string :hasIdeas, null:false
      t.string :willingToDo, null:false
      t.string :interests, null:false

      t.timestamps
    end
  end
end
