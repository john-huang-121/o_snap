class Picture < ApplicationRecord
  validates :title, :description, :user_id, :tags, presence: true

  validate :ensure_picture

  has_one_attached :picture

  def self.search_pictures(search_terms)
    if search_terms
      nil
      # Picture.where("tags @> ARRAY[?]::varchar[]", ["fantasy", "fiction"])
    else
      nil
    end
  end

  def ensure_picture
    unless self.picture.attached?
      errors[:picture] << 'Must have picture attached'
    end
  end
end
