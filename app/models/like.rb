class Like < ApplicationRecord
  validates :picture_id, :liker_id, presence: true
  validates_uniqueness_of :picture_id, :scope => [:liker_id]

  belongs_to :picture,
  primary_key: :id,
  foreign_key: :picture_id,
  class_name: 'Picture'

  belongs_to :liker,
  primary_key: :id,
  foreign_key: :liker_id,
  class_name: 'User'
end