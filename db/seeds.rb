# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#

user = User.create(email: 'guest@food-me-now.com', password: 'guest_password')

delivery_address = DeliveryAddress.create(
  user_id: 1,
  full_name: 'Honorable Guest', 
  street_address: '123 Market St.',
  city: 'San Francisco',
  state: 'CA',
  postal_code: '94110',
  tel: '555-555-5555',
  current_address: true
)

payment_method = PaymentMethod.create(
  card_number: '5555555555555555',
  exp_date: '08/16',
  cvv: '648',
  zip: '94110',
  user_id: 1,
  current_billing: true
)

restaurants = Restaurant.create([
  { name: "Supreme Pizza",
    street_address: "3348 18th Street (18th St. & Capp St.)",
    city: "San Francisco",
    state: "CA",
    zip: 94110,
    telephone: "(415) 437-9400"
  },
  { name: "Wonderland",
    street_address: "500 Haight St (Haight St. & Fillmore St.)",
    city: "San Francisco",
    state: "CA",
    zip: 94117,
    telephone: "(415) 355-9125"
  },
  { name: "Frjtz",
    street_address: "590 Valencia St. (Valencia St. & 17th St.)",
    city: "San Francisco",
    state: "CA",
    zip: 94110,
    telephone: "(415) 863-8272"
  }
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
  { restaurant_id: 3, cuisine_tag_id: 2}
])

menu_categories = MenuCategory.create([
  { name: 'appetizers', restaurant_id: 1, ord: 1 },
  { name: 'salads', restaurant_id: 1, ord: 2 },
  { name: 'calzones', restaurant_id: 1, ord: 3 },
  { name: 'slices', restaurant_id: 1, ord: 4 },
  { name: 'pizzas', restaurant_id: 1, ord: 5 },
  { name: 'pasta', restaurant_id: 1, ord: 6 },
  { name: 'sides', restaurant_id: 1, ord: 7 },
  { name: 'desserts', restaurant_id: 1, ord: 8 }
])

menu_items = MenuItem.create([
  { name: "Garlic Bread", price: 3, menu_category_id: 1 },
  { name: "Buffalo Wings", price: 5, menu_category_id: 1 },
  { name: "Caesar Salad", price: 6, menu_category_id: 2 },
  { name: "Meat Lover's", price: 8, menu_category_id: 3 },
  { name: "Vegetarian", price: 8, menu_category_id: 3 },
  { name: "Cheese", price: 3, menu_category_id: 4 },
  { name: "Mission Slice", price: 4, menu_category_id: 4 },
  { name: "49ers Slice", price: 4, menu_category_id: 4 },
  { name: "12 Inch", price: 10, menu_category_id: 5 },
  { name: "14 Inch", price: 12, menu_category_id: 5 },
  { name: "16 Inch", price: 14, menu_category_id: 5 },
  { name: "Spaghetti", price: 8, menu_category_id: 5 },
  { name: "Lasanga", price: 9, menu_category_id: 6 },
  { name: "Ravioli", price: 9, menu_category_id: 6 },
  { name: "Garlic Bread", price: 3, menu_category_id: 7 },
  { name: "Chocolate Chip", price: 2, menu_category_id: 8 },
  { name: "Chocolate Cake", price: 3, menu_category_id: 8 },
  { name: "Cheesecake", price: 3, menu_category_id: 8 }
])

delivery_address = DeliveryAddress.create(
  full_name: 'Honorable Guest',
  street_address: '123 Paradiso St',
  city: 'San Francisco',
  state: 'CA',
  postal_code: '94117',
  tel: '555-555-5555',
  user_id: 1
)


