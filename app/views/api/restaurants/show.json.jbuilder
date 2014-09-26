json.(@restaurant, :name, :street_address, :city, :state, :zip, :telephone, :created_at, :updated_at)
json.menu_categories @restaurant.menu_categories do |mc|
  json.name mc.name
  json.ord mc.ord
  json.menu_items mc.menu_items do |mi|
    json.id mi.id
    json.name mi.name
    json.price mi.price
  end
end
