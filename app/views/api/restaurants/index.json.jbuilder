json.array! @restaurants do |restaurant|
  json.id restaurant.id
  json.name restaurant.name
  json.street_address restaurant.street_address
  json.cross_streets restaurant.cross_streets
  json.city restaurant.city
  json.state restaurant.state
  json.zip restaurant.zip
  json.telephone restaurant.telephone
  json.rating restaurant.rating
  json.price restaurant.price
  json.img_path restaurant.img_path
  json.cuisine_tags restaurant.cuisine_tags do |cuisine_tag|
    json.name cuisine_tag.name
  end
end
