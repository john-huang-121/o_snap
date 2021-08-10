class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.integer :user_id, null: false
      t.integer :follower_id, null: false
      t.datetime :date_created, :default => DateTime.now

      t.timestamps
    end

    add_index :follows, :follower_id
    add_index :follows, [:user_id, :follower_id], unique: true
  end
end
