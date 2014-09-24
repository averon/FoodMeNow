# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#
restaurants = Restaurant.create([
  { name: "Supreme Pizza", street_address: "3348 18th Street (18th St. & Capp St.)", city: "San Francisco", state: "CA", zip: 94110, telephone: "(415) 437-9400" },
  { name: "Wonderland", street_address: "500 Haight St (Haight St. & Fillmore St.)", city: "San Francisco", state: "CA", zip: 94117, telephone: "(415) 355-9125"},
  { name: "Frjtz", street_address: "590 Valencia St. (Valencia St. & 17th St.)", city: "San Francisco", state: "CA", zip: 94110, telephone: "(415) 863-8272"}
])

cuisine_tags = CuisineTag.create([
  { name: 'American' },
  { name: 'Belgian' },
  { name: 'Chinese' },
  { name: 'Indian' },
  { name: 'Italian' },
  { name: 'Japanese' },
  { name: 'Seafood' },
  { name: 'Thai' },
  { name: 'Vegetarian' }
])

cuisine_taggings = CuisineTagging.create([
  { restaurant_id: 1, cuisine_tag_id: 4},
  { restaurant_id: 2, cuisine_tag_id: 3},
  { restaurant_id: 2, cuisine_tag_id: 2}
])
