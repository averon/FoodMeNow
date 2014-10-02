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
    street_address: "3348 18th Street",
    cross_streets: "18th St. & Capp St.",
    city: "San Francisco",
    state: "CA",
    zip: 94110,
    telephone: "(415) 437-9400",
    rating: 5,
    price: 2,
    img_path: 'supreme_pizza/supreme_pizza.jpg'
  },
  { name: "Wonderland",
    street_address: "500 Haight St",
    cross_streets: "Haight St. & Fillmore St.",
    city: "San Francisco",
    state: "CA",
    zip: 94117,
    telephone: "(415) 355-9125",
    rating: 4,
    price: 2,
    img_path: 'wonderland/wonderland.jpg'
  },
  { name: "Frjtz",
    street_address: "590 Valencia St.",
    cross_streets: "Valencia St. & 17th St.",
    city: "San Francisco",
    state: "CA",
    zip: 94110,
    telephone: "(415) 863-8272",
    rating: 4,
    price: 2,
    img_path: 'frjtz/frjtz.jpg'
  },
  { name: "Kaka Udon Kitchen",
    street_address: "1535 Franklin St",
    cross_streets: "Franklin St. & Austin St.",
    city: "San Francisco",
    state: "CA",
    zip: 94119,
    telephone: "(415) 577-2380",
    rating: 4,
    price: 2,
    img_path: 'kaka_udon_kitchen/kaka_udon_kitchen.jpg'
  },

])

cuisine_tags = CuisineTag.create([
  { name: 'American' },  # 1 
  { name: 'Belgian' },   # 2
  { name: 'Chinese' },   # 3
  { name: 'Indian' },    # 4
  { name: 'Italian' },   # 5
  { name: 'Japanese' },  # 6
  { name: 'Seafood' },   # 7
  { name: 'Thai' },      # 8
  { name: 'Vegetarian' } # 9
])

cuisine_taggings = CuisineTagging.create([
  { restaurant_id: 1, cuisine_tag_id: 5},
  { restaurant_id: 2, cuisine_tag_id: 3},
  { restaurant_id: 3, cuisine_tag_id: 2},
  { restaurant_id: 4, cuisine_tag_id: 6},
])

menu_categories = MenuCategory.create([
  { name: 'Appetizers', restaurant_id: 1, ord: 1 },
  { name: 'Salads', restaurant_id: 1, ord: 2 },
  { name: 'Calzones', restaurant_id: 1, ord: 3 },
  { name: 'Slices', restaurant_id: 1, ord: 4 },
  { name: 'Pizzas', restaurant_id: 1, ord: 5 },
  { name: 'Pasta', restaurant_id: 1, ord: 6 },
  { name: 'Sides', restaurant_id: 1, ord: 7 },
  { name: 'Desserts', restaurant_id: 1, ord: 8 },

  { name: 'Appetizers', restaurant_id: 2, ord: 1 },
  { name: 'Soup', restaurant_id: 2, ord: 2 },
  { name: 'Beef and Lamb', restaurant_id: 2, ord: 3 },
  { name: 'Chicken and Duck', restaurant_id: 2, ord: 4 },
  { name: 'Pork', restaurant_id: 2, ord: 5 },
  { name: 'Noodle and Rice', restaurant_id: 2, ord: 6 },

  { name: 'Frjtz', restaurant_id: 3, ord: 1 },
  { name: 'Belgian Mussels', restaurant_id: 3, ord: 2 },
  { name: 'Burgers', restaurant_id: 3, ord: 3 },
  { name: 'Sandwiches', restaurant_id: 3, ord: 4 },
  { name: 'Savory Crepes', restaurant_id: 3, ord: 5 },
  { name: 'Sweet Crepes', restaurant_id: 3, ord: 6 },
  { name: 'Waffles', restaurant_id: 3, ord: 7 },
])

menu_items = MenuItem.create([
  { name: "Buffalo Wings", price: 5, menu_category_id: 1, img_path: 'supreme_pizza/buffalo_wings.jpg' },
  { name: "Chicken Nuggets", price: 5, menu_category_id: 1, img_path: 'supreme_pizza/chicken_nuggets.jpg' },
  { name: "Mozzarella Sticks", price: 4, menu_category_id: 1, img_path: 'supreme_pizza/mozzarella_sticks.jpg' },
  { name: "Chopped Salad", price: 5, menu_category_id: 2, img_path: 'supreme_pizza/chopped_salad.jpg' },
  { name: "Caesar Salad", price: 6, menu_category_id: 2, img_path: 'supreme_pizza/caesar_salad.jpg' },
  { name: "Greek Salad", price: 6, menu_category_id: 2, img_path: 'supreme_pizza/greek_salad.jpg' },
  { name: "Meat Lover's", price: 8, menu_category_id: 3, img_path: 'supreme_pizza/meat_lovers_calzone.jpg' },
  { name: "Vegetarian Calzone", price: 8, menu_category_id: 3, img_path: 'supreme_pizza/vegetarian_calzone.jpg' },
  { name: "Seafood Calzone", price: 8, menu_category_id: 3, img_path: 'supreme_pizza/seafood_calzone.jpg' },
  { name: "Cheese", price: 3, menu_category_id: 4, img_path: 'supreme_pizza/cheese_pizza_slice.jpg' },
  { name: "Mission Slice", price: 4, menu_category_id: 4, img_path: 'supreme_pizza/mission_slice.jpg' },
  { name: "Margarita Slice", price: 4, menu_category_id: 4, img_path: 'supreme_pizza/margarita_slice.jpg' },
  { name: "Hawaiian Slice", price: 4, menu_category_id: 4, img_path: 'supreme_pizza/hawaiian_slice.jpg' },
  { name: "BBQ Slice", price: 4, menu_category_id: 4, img_path: 'supreme_pizza/bbq_slice.jpg' },
  { name: "49ers Slice", price: 4, menu_category_id: 4, img_path: 'supreme_pizza/49ers_slice.jpg' },
  { name: "12 Inch", price: 10, menu_category_id: 5, img_path: 'supreme_pizza/12_inch_pie.jpg' },
  { name: "14 Inch", price: 12, menu_category_id: 5, img_path: 'supreme_pizza/14_inch_pie.jpg' },
  { name: "16 Inch", price: 14, menu_category_id: 5, img_path: 'supreme_pizza/16_inch_pie.jpg' },
  { name: "Spaghetti", price: 8, menu_category_id: 6, img_path: 'supreme_pizza/spaghetti.jpeg' },
  { name: "Lasanga", price: 9, menu_category_id: 6, img_path: 'supreme_pizza/lasagna.jpg' },
  
  { name: "Ravioli", price: 9, menu_category_id: 6, img_path: 'supreme_pizza/ravioli.jpg' },
  { name: "Garlic Bread", price: 3, menu_category_id: 7, img_path: 'supreme_pizza/garlic_bread.jpg' },
  { name: "Chocolate Cake", price: 3, menu_category_id: 8, img_path: 'supreme_pizza/chocolate_cake.jpg' },
  { name: "Cheesecake", price: 3, menu_category_id: 8, img_path: 'supreme_pizza/cheesecake.jpg' },
  { name: "Chocolate Chip Cookie", price: 2, menu_category_id: 8, img_path: 'supreme_pizza/chocolate_chip_cookie.jpg' },

  { name: "Pot Stickers", price: 6, menu_category_id: 9, img_path: 'wonderland/pot_stickers.jpg' },
  { name: "BBQ Pork", price: 6, menu_category_id: 9, img_path: 'wonderland/bbq_pork.jpg' },
  { name: "Onion Pancakes", price: 6, menu_category_id: 9, img_path: 'wonderland/onion_pancakes.jpg' },
  { name: "Crab Rangoon", price: 6, menu_category_id: 9, img_path: 'wonderland/crab_rangoon.jpg' },
  { name: "Spring Rolls", price: 6, menu_category_id: 9, img_path: 'wonderland/spring_rolls.jpg' },
  { name: "Wonton Soup", price: 6, menu_category_id: 10, img_path: 'wonderland/wonton_soup.jpg' },
  { name: "Hot and Sour Soup", price: 6, menu_category_id: 10, img_path: 'wonderland/hot_and_sour_soup.jpg' },
  { name: "Egg Drop Soup", price: 6, menu_category_id: 10, img_path: 'wonderland/egg_drop_soup.jpg' },
  { name: "Broccoli Beef", price: 10, menu_category_id: 11, img_path: 'wonderland/broccoli_beef.jpg' },
  { name: "Mongolian Beef", price: 10, menu_category_id: 11, img_path: 'wonderland/mongolian_beef.jpg' },
  { name: "Cumin Lamb", price: 11, menu_category_id: 11, img_path: 'wonderland/cumin_lamb.jpg' },
  { name: "Kung Pow Chicken", price: 10, menu_category_id: 12, img_path: 'wonderland/kung_pow_chicken.jpg' },
  { name: "General Tsao Chicken", price: 9, menu_category_id: 12, img_path: 'wonderland/general_tsao_chicken.jpg' },
  { name: "Orange Chicken", price: 9, menu_category_id: 12, img_path: 'wonderland/orange_chicken.jpg' },
  { name: "Sesame Chicken", price: 9, menu_category_id: 12, img_path: 'wonderland/sesame_chicken.jpg' },
  { name: "Cashew Chicken", price: 9, menu_category_id: 12, img_path: 'wonderland/cashew_chicken.jpg' },
  { name: "Sweet and Sour Pork", price: 9, menu_category_id: 13, img_path: 'wonderland/sweet_and_sour_pork.jpg' },
  { name: "Salt and Pepper Pork", price: 9, menu_category_id: 13, img_path: 'wonderland/salt_and_pepper_pork.jpg' },
  { name: "Chow Mein", price: 8, menu_category_id: 14, img_path: 'wonderland/chow_mein.jpg' },
  { name: "Chow Fun", price: 8, menu_category_id: 14, img_path: 'wonderland/chow_fun.jpg' },
  { name: "Fried Rice", price: 8, menu_category_id: 14, img_path: 'wonderland/fried_rice.jpg' },
  { name: "Brown Rice", price: 2, menu_category_id: 14, img_path: 'wonderland/brown_rice.jpg' },
  { name: "White Rice", price: 1, menu_category_id: 14, img_path: 'wonderland/white_rice.png' },

  { name: "Frjtz", price: 4, menu_category_id: 15, img_path: 'frjtz/regular_frjtz.jpg' },
  { name: "Babylon", price: 13, menu_category_id: 16, img_path: 'frjtz/babylon.jpg' },
  { name: "Pompeii", price: 13, menu_category_id: 16, img_path: 'frjtz/pompeii.jpg' },
  { name: "Delphi", price: 13, menu_category_id: 16, img_path: 'frjtz/delphi.jpg' },
  { name: "Frjtz Burger", price: 10, menu_category_id: 17, img_path: 'frjtz/frjtz_burger.jpg' },
  { name: "The New York", price: 13, menu_category_id: 17, img_path: 'frjtz/new_york_burger.png' },
  { name: "The Tokyo", price: 13, menu_category_id: 17, img_path: 'frjtz/tokyo_burger.jpg' },
  { name: "Degas", price: 10, menu_category_id: 18, img_path: 'frjtz/degas.jpg' },
  { name: "Sisley", price: 10, menu_category_id: 18, img_path: 'frjtz/sisley.jpg' },
  { name: "Velasquez", price: 12, menu_category_id: 18, img_path: 'frjtz/velasquez.jpg' },
  { name: "Canatello", price: 10, menu_category_id: 19, img_path: 'frjtz/canatello.jpg' },
  { name: "Da Vinci", price: 10, menu_category_id: 19, img_path: 'frjtz/da_vinci.jpg' },
  { name: "Hopper", price: 10, menu_category_id: 20, img_path: 'frjtz/hopper.jpg' },
  { name: "Van Gough", price: 10, menu_category_id: 20, img_path: 'frjtz/van_gough.jpg' },
  { name: "Petillon", price: 10, menu_category_id: 21, img_path: 'frjtz/petillon.jpg' },
  { name: "Tromberg", price: 10, menu_category_id: 21, img_path: 'frjtz/tromberg.jpg' },
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


