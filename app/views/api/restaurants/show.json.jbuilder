json.(@restaurant, :name, :street_address, :cross_streets, :city, :state, :zip, :telephone, :rating, :price, :img_path)
json.menu_categories @restaurant.menu_categories do |mc|
  json.name mc.name
  json.ord mc.ord
  json.menu_items mc.menu_items do |mi|
    json.id mi.id
    json.name mi.name
    json.price mi.price
    json.img_path mi.img_path
    json.description mi.description
  end
end
