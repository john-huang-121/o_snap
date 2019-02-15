class Picture < ApplicationRecord
  validates :title, :description, :user_id, :tags presence: true

  validate :ensure_picture

  has_one_attached :picture

  def ensure_picture
    unless self.picture.attached?
      errors[:picture] << 'Must have picture attached'
    end
  end
end
