class AddTagsToPicture < ActiveRecord::Migration[5.2]
  def change
    add_column :pictures, :tags, :string, array: true
    add_index :pictures, :tags, using: 'gin'
  end
end
