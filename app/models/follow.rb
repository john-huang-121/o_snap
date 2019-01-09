class Follow < ApplicationRecord
  belongs_to :follower,
  primary_key: :id,
  foreign_key: :follwer_id,
  class_name: 'User'

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: 'User'
end
