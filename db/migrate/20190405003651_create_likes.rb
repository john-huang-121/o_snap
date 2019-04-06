class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :picture_id, null: false
      t.integer :liker_id, null: false
      t.datetime

      t.timestamps
    end

    add_index :likes, [:liker_id, :picture_id]
    add_index :likes, [:picture_id, :liker_id], unique: true
  end
end
