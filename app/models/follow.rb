class Follow < ApplicationRecord
  validates :user_id, :follower_id, presence: true
  validates_uniqueness_of :user_id, :scope => [:follower_id]
  validates_uniqueness_of :follower_id, :scope => [:user_id]

  belongs_to :follower,
  primary_key: :id,
  foreign_key: :follwer_id,
  class_name: 'User'

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: 'User'
end
