json.extract! picture, :id, :title, :description, :tags, :created_at, :user_id
json.pictureUrl url_for(picture.picture)
json.likes do
  picture.likes.each do |like|
    json.set! like.liker_id, like.id
  end
end
json.comments do
  picture.comments.each do |comment|
    json.set! comment.id do
      json.set! comment.commenter_id, comment.body
    end
  end
end