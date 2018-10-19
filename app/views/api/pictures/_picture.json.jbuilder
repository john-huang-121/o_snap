json.extract! picture, :id, :title, :description, :created_at, :user_id
json.pictureUrl url_for(picture.picture)
