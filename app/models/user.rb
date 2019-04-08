class User < ApplicationRecord
  validates :email, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validate :profile_cover?

  after_initialize :ensure_session_token

  # has_one_attached :profile_picture, default_url: "app/assets/images/if_30.User_290120.png"

  has_one_attached :profile_cover

  has_many :comments,
  primary_key: :id,
  foreign_key: :commenter_id,
  class_name: 'Comment'

  has_many :followers,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: 'Follow'

  has_many :follows,
  primary_key: :id,
  foreign_key: :follower_id,
  class_name: 'Follow'

  has_many :likes,
  primary_key: :id,
  foreign_key: :liker_id,
  class_name: 'Like'

  attr_reader :password

  def profile_cover?
    unless self.profile_cover.attached?
      self.profile_cover.attach(io: File.open('app/assets/images/nathan-anderson-135242-unsplash.jpg'), filename: 'default_cover.jpg')
    end
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def self.find_by_credentials(email, pw)
    user = User.find_by_email(email)

    if user && user.is_password?(pw)
      user
    else
      nil
    end
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end

#find by credential take in optional username?
