json.array! @restaurants do |restaurant|
  json.id restaurant.id
  json.name restaurant.name
  json.street_address restaurant.street_address
  json.city restaurant.city
  json.state restaurant.state
  json.zip restaurant.zip
  json.telephone restaurant.telephone
  json.cuisine_tags restaurant.cuisine_tags do |cuisine_tag|
    json.name cuisine_tag.name
  end
end
