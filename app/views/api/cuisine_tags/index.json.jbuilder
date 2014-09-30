json.array! @cuisine_tags do |cuisine_tag|
  json.name cuisine_tag.name
  json.restaurants cuisine_tag.restaurants do |restaurant|
    json.name restaurant.name
    json.street_address restaurant.street_address
    json.city restaurant.city
    json.state restaurant.state
    json.zip restaurant.zip
    json.telephone restaurant.telephone
  end
end
