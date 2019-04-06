json.set! :likes do
  json.partial! 'api/likes/like', like: @like
end