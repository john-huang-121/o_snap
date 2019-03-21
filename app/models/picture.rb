class Picture < ApplicationRecord
  validates :title, :description, :user_id, :tags, presence: true

  validate :ensure_picture

  has_one_attached :picture

  def self.search_pictures(search_terms)
    i = search_terms.length
    resulting_search = []
    result = []
    
    while i > 0
      resulting_search.concat(search_terms.combination(i).to_a)
      i -= 1
    end

    # @> means contains; Picture.where("'#{search_terms[0]}' = ANY (tags)")
    resulting_search.each do |search_combo|
      result += Picture.where("tags @> ARRAY[?]::varchar[]", search_combo) 
    end

    result
  end

  # def parse_JSON_tag(tags_arr)
  #   result_arr = []

  #   tags_arr
  # end

  def ensure_picture
    unless self.picture.attached?
      errors[:picture] << 'Must have picture attached'
    end
  end
end
