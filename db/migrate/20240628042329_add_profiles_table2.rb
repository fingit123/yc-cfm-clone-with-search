class AddProfilesTable2 < ActiveRecord::Migration[7.1]
  def change
    create_table :profiles, id: :uuid do |t|
      t.string :name, null:false
      t.string :profilepic, null:false
      t.string :location, null:false
      t.integer :age, null:false
      t.string :lastseen, null:false
      t.string :intro, null:false
      t.string :free, null:false
      t.string :accomplishment, null:false
      t.string :education, null:false
      t.string :employment, null:false
      t.string :ideas, null:false
      t.string :lookingfor, null:false
      t.string :linkedin, null:false
      t.string :technical, null:false
      t.string :readywithin, null:false
      t.string :hasideas, null:false
      t.string :willingtodo, null:false
      t.string :interests, null:false

      t.timestamps
    end
  end
end
