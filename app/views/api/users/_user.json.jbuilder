json.extract! user, :id, :email
json.follows do
  if all_users
    all_users.each do |empty_user_follow|
      json.set! empty_user_follow.id, :false
    end
    user.follows.each do |follow|
      json.set! follow.user_id, :true
    end
  else
    user.follows.each do |follow|
      json.set! follow.user_id, :true
    end
  end
end
json.followers do
  if all_users
    all_users.each do |empty_user_follower|
      json.set! empty_user_follower.id, :false
    end
    user.followers.each do |follower|
      json.set! follower.follower_id, :true
    end
  else
    user.followers.each do |follower|
      json.set! follower.follower_id, :true
    end
  end
end
json.profile_cover url_for(user.profile_cover)