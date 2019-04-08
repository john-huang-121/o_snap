class Comment < ApplicationRecord
  validates :commenter_id, :picture_id, :body, presence: true

  belongs_to :commenter,
  primary_key: :id,
  foreign_key: :commenter_id,
  class_name: 'User'

  belongs_to :picture,
  primary_key: :id,
  foreign_key: :picture_id,
  class_name: 'Picture'
end