all_users = nil
json.set! :user do
  json.partial! 'api/users/user', user: @user, all_users: all_users
end
