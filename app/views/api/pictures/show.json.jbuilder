json.set! :pictures do
  json.partial! 'api/pictures/picture', picture: @picture
end
