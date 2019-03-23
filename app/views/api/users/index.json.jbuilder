all_users = @users
@users.each do |user|
  json.set! user.id do
    json.partial! 'api/users/user', user: user, all_users: all_users
  end
end