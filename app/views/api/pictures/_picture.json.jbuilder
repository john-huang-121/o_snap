json.extract! picture, :id, :title, :description, :tags :created_at, :user_id
json.pictureUrl url_for(picture.picture)
