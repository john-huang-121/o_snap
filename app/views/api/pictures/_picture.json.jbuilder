json.extract! picture, :id, :title, :description, :tags, :created_at, :user_id
json.pictureUrl url_for(picture.picture)
json.likes do
  picture.likes.each do |like|
    json.set! like.liker_id, true
  end
end