class CreateComment < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :picture_id, null: false
      t.integer :commenter_id, null: false
      t.string :body, null: false
      t.datetime

      t.timestamps
    end

    add_index :comments, [:commenter_id, :picture_id]
    add_index :comments, [:picture_id, :commenter_id]
  end
end
