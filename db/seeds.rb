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
    img_path: 'supreme_pizza/restaurant/',
    cuisine: 'Italian'
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
    img_path: 'wonderland/restaurant/',
    cuisine: 'Chinese'
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
    img_path: 'frjtz/restaurant/',
    cuisine: 'Belgian'
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
    img_path: 'kaka_udon_kitchen/restaurant/',
    cuisine: 'Japanese'
  }

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

  { name: 'Burgers', restaurant_id: 3, ord: 1 },
  { name: 'Sandwiches', restaurant_id: 3, ord: 2 },
  { name: 'Frjtz', restaurant_id: 3, ord: 3 },
  { name: 'Belgian Mussels', restaurant_id: 3, ord: 4 },
  { name: 'Savory Crepes', restaurant_id: 3, ord: 5 },
  { name: 'Sweet Crepes', restaurant_id: 3, ord: 6 },
  { name: 'Waffles', restaurant_id: 3, ord: 7 },

  { name: 'Appetizers', restaurant_id: 4, ord: 1 },
  { name: 'Sashimi', restaurant_id: 4, ord: 2 },
  { name: 'Nigiri', restaurant_id: 4, ord: 3 },
  { name: 'Sushi', restaurant_id: 4, ord: 4 },
  { name: 'Udon', restaurant_id: 4, ord: 5 },
])

menu_items = MenuItem.create([
  { name: "Buffalo Wings", price: 5, menu_category_id: 1, img_path: 'supreme_pizza/menu/buffalo_wings.jpg' },
  { name: "Chicken Nuggets", price: 5, menu_category_id: 1, img_path: 'supreme_pizza/menu/chicken_nuggets.jpg' },
  { name: "Mozzarella Sticks", price: 4, menu_category_id: 1, img_path: 'supreme_pizza/menu/mozzarella_sticks.jpg' },
  { name: "Chopped Salad", price: 5, menu_category_id: 2, img_path: 'supreme_pizza/menu/chopped_salad.jpg' },
  { name: "Caesar Salad", price: 6, menu_category_id: 2, img_path: 'supreme_pizza/menu/caesar_salad.jpg' },
  { name: "Greek Salad", price: 6, menu_category_id: 2, img_path: 'supreme_pizza/menu/greek_salad.jpg' },
  { name: "Meat Lover's", price: 8, menu_category_id: 3, img_path: 'supreme_pizza/menu/meat_lovers_calzone.jpg' },
  { name: "Vegetarian Calzone", price: 8, menu_category_id: 3, img_path: 'supreme_pizza/menu/vegetarian_calzone.jpg' },
  { name: "Seafood Calzone", price: 8, menu_category_id: 3, img_path: 'supreme_pizza/menu/seafood_calzone.jpg' },
  { name: "Cheese", price: 3, menu_category_id: 4, img_path: 'supreme_pizza/menu/cheese_pizza_slice.jpg' },
  { name: "Mission Slice", price: 4, menu_category_id: 4, img_path: 'supreme_pizza/menu/mission_slice.jpg' },
  { name: "Margarita Slice", price: 4, menu_category_id: 4, img_path: 'supreme_pizza/menu/margarita_slice.jpg' },
  { name: "Hawaiian Slice", price: 4, menu_category_id: 4, img_path: 'supreme_pizza/menu/hawaiian_slice.jpg' },
  { name: "BBQ Slice", price: 4, menu_category_id: 4, img_path: 'supreme_pizza/menu/bbq_slice.jpg' },
  { name: "49ers Slice", price: 4, menu_category_id: 4, img_path: 'supreme_pizza/menu/49ers_slice.jpg' },
  { name: "12 Inch", price: 10, menu_category_id: 5, img_path: 'supreme_pizza/menu/12_inch_pie.jpg' },
  { name: "14 Inch", price: 12, menu_category_id: 5, img_path: 'supreme_pizza/menu/14_inch_pie.jpg' },
  { name: "16 Inch", price: 14, menu_category_id: 5, img_path: 'supreme_pizza/menu/16_inch_pie.jpg' },
  { name: "Spaghetti", price: 8, menu_category_id: 6, img_path: 'supreme_pizza/menu/spaghetti.jpeg' },
  { name: "Lasanga", price: 9, menu_category_id: 6, img_path: 'supreme_pizza/menu/lasagna.jpg' },
  
  { name: "Ravioli", price: 9, menu_category_id: 6, img_path: 'supreme_pizza/menu/ravioli.jpg' },
  { name: "Garlic Bread", price: 3, menu_category_id: 7, img_path: 'supreme_pizza/menu/garlic_bread.jpg' },
  { name: "Chocolate Cake", price: 3, menu_category_id: 8, img_path: 'supreme_pizza/menu/chocolate_cake.jpg' },
  { name: "Cheesecake", price: 3, menu_category_id: 8, img_path: 'supreme_pizza/menu/cheesecake.jpg' },
  { name: "Chocolate Chip Cookie", price: 2, menu_category_id: 8, img_path: 'supreme_pizza/menu/chocolate_chip_cookie.jpg' },

  { name: "Pot Stickers", price: 6, menu_category_id: 9, img_path: 'wonderland/menu/pot_stickers.jpg' },
  { name: "BBQ Pork", price: 6, menu_category_id: 9, img_path: 'wonderland/menu/bbq_pork.jpg' },
  { name: "Onion Pancakes", price: 6, menu_category_id: 9, img_path: 'wonderland/menu/onion_pancakes.jpg' },
  { name: "Crab Rangoon", price: 6, menu_category_id: 9, img_path: 'wonderland/menu/crab_rangoon.jpg' },
  { name: "Spring Rolls", price: 6, menu_category_id: 9, img_path: 'wonderland/menu/spring_rolls.jpg' },
  { name: "Wonton Soup", price: 6, menu_category_id: 10, img_path: 'wonderland/menu/wonton_soup.jpg' },
  { name: "Hot and Sour Soup", price: 6, menu_category_id: 10, img_path: 'wonderland/menu/hot_and_sour_soup.jpg' },
  { name: "Egg Drop Soup", price: 6, menu_category_id: 10, img_path: 'wonderland/menu/egg_drop_soup.jpg' },
  { name: "Broccoli Beef", price: 10, menu_category_id: 11, img_path: 'wonderland/menu/broccoli_beef.jpg' },
  { name: "Mongolian Beef", price: 10, menu_category_id: 11, img_path: 'wonderland/menu/mongolian_beef.jpg' },
  { name: "Cumin Lamb", price: 11, menu_category_id: 11, img_path: 'wonderland/menu/cumin_lamb.jpg' },
  { name: "Kung Pow Chicken", price: 10, menu_category_id: 12, img_path: 'wonderland/menu/kung_pow_chicken.jpg' },
  { name: "General Tsao Chicken", price: 9, menu_category_id: 12, img_path: 'wonderland/menu/general_tsao_chicken.jpg' },
  { name: "Orange Chicken", price: 9, menu_category_id: 12, img_path: 'wonderland/menu/orange_chicken.jpg' },
  { name: "Sesame Chicken", price: 9, menu_category_id: 12, img_path: 'wonderland/menu/sesame_chicken.jpg' },
  { name: "Cashew Chicken", price: 9, menu_category_id: 12, img_path: 'wonderland/menu/cashew_chicken.jpg' },
  { name: "Sweet and Sour Pork", price: 9, menu_category_id: 13, img_path: 'wonderland/menu/sweet_and_sour_pork.jpg' },
  { name: "Salt and Pepper Pork", price: 9, menu_category_id: 13, img_path: 'wonderland/menu/salt_and_pepper_pork.jpg' },
  { name: "Chow Mein", price: 8, menu_category_id: 14, img_path: 'wonderland/menu/chow_mein.jpg' },
  { name: "Chow Fun", price: 8, menu_category_id: 14, img_path: 'wonderland/menu/chow_fun.jpg' },
  { name: "Fried Rice", price: 8, menu_category_id: 14, img_path: 'wonderland/menu/fried_rice.jpg' },
  { name: "Brown Rice", price: 2, menu_category_id: 14, img_path: 'wonderland/menu/brown_rice.jpg' },
  { name: "White Rice", price: 1, menu_category_id: 14, img_path: 'wonderland/menu/white_rice.png' },

  { name: "Frjtz", price: 4, menu_category_id: 17, img_path: 'frjtz/menu/regular_frjtz.jpg', description: "Our signature hand-cut fries" },
  { name: "Babylon", price: 13, menu_category_id: 18, img_path: 'frjtz/menu/babylon.jpg', description: "Saffron threads, mustard, shallots and garlic" },
  { name: "Pompeii", price: 13, menu_category_id: 18, img_path: 'frjtz/menu/pompeii.jpg', description: "Gorgonzola, pancetta, shallots, and cream" },
  { name: "Delphi", price: 13, menu_category_id: 18, img_path: 'frjtz/menu/delphi.jpg', description: "Feta cheese, kalamata olives, garlic, and oregano" },
  { name: "Frjtz Burger", price: 10, menu_category_id: 15, img_path: 'frjtz/menu/frjtz_burger.jpg', description: "A mouth watering 6 oz burger served on a brioche bun, served with caramelized red onions, chipotle remoulade, lettuce and tomato, and pickles" },
  { name: "The New York", price: 13, menu_category_id: 15, img_path: 'frjtz/menu/new_york_burger.png', description: "Bacon, cheddar cheese and avocado" },
  { name: "The Tokyo", price: 13, menu_category_id: 15, img_path: 'frjtz/menu/tokyo_burger.jpg', description: "Add wasabi mayo, bacon, avocado, pickled ginger and scallions" },
  { name: "Degas", price: 10, menu_category_id: 16, img_path: 'frjtz/menu/degas.jpg', description: "Grilled steak, bellpeppers, caramelized onions. cheddar cheese, chipotle remoulade, cilantro and green onions on a baguette" },
  { name: "Sisley", price: 10, menu_category_id: 16, img_path: 'frjtz/menu/sisley.jpg', description: "Roasted pears, cheddar and gorgonzola cheese with chipotle remoulade on focaccia with avocado and served with mixed greens" },
  { name: "Velasquez", price: 12, menu_category_id: 16, img_path: 'frjtz/menu/velasquez.jpg', description: "Prosciutto, melted mozzarella, roasted pineapple and roasted pepper mayo on focaccia served with spring mix" },
  { name: "Canatello", price: 10, menu_category_id: 19, img_path: 'frjtz/menu/canatello.jpg', description: "Goat cheese, fresh tomatoes, fresh shallots, parsley and olive oil" },
  { name: "Da Vinci", price: 10, menu_category_id: 19, img_path: 'frjtz/menu/da_vinci.jpg', description: "Mozzarella cheese, pesto and tomato" },
  { name: "Hopper", price: 10, menu_category_id: 20, img_path: 'frjtz/menu/hopper.jpg', description: "Roasted pears with nutella, toasted almonds and whipped cream" },
  { name: "Van Gough", price: 10, menu_category_id: 20, img_path: 'frjtz/menu/van_gough.jpg', description: "Butter, lemon juice and sugar" },
  { name: "Petillon", price: 10, menu_category_id: 21, img_path: 'frjtz/menu/petillon.jpg', description: "2 poached eggs, bacon and hollandaise" },
  { name: "Tromberg", price: 10, menu_category_id: 21, img_path: 'frjtz/menu/tromberg.jpg', description: "Date butter and syrup" },
  { name: "Gyoza", price: 5, menu_category_id: 22, img_path: 'kaka_udon_kitchen/menu/gyoza.jpg', },
  { name: "Seaweed Salad", price: 4, menu_category_id: 22, img_path: 'kaka_udon_kitchen/menu/seaweed_salad.jpg', },
  { name: "Miso Soup", price: 3, menu_category_id: 22, img_path: 'kaka_udon_kitchen/menu/miso_soup.jpg', },
  { name: "Tuna Sashimi", price: 7, menu_category_id: 23, img_path: 'kaka_udon_kitchen/menu/tuna_sashimi.jpg', },
  { name: "Salmon Sashimi", price: 7, menu_category_id: 23, img_path: 'kaka_udon_kitchen/menu/salmon_sashimi.jpg', },
  { name: "Uni Sashimi", price: 7, menu_category_id: 23, img_path: 'kaka_udon_kitchen/menu/uni_sashimi.jpeg', },
  { name: "Tuna Nigiri", price: 4, menu_category_id: 24, img_path: 'kaka_udon_kitchen/menu/tuna_nigiri.jpg', },
  { name: "Salmon Nigiri", price: 4, menu_category_id: 24, img_path: 'kaka_udon_kitchen/menu/salmon_nigiri.jpg', },
  { name: "Avocado Roll", price: 3, menu_category_id: 25, img_path: 'kaka_udon_kitchen/menu/avocado_roll.jpg', },
  { name: "California Roll", price: 4, menu_category_id: 25, img_path: 'kaka_udon_kitchen/menu/california_roll.jpg', },
  { name: "Spicy Tuna Roll", price: 4, menu_category_id: 25, img_path: 'kaka_udon_kitchen/menu/spicy_tuna_roll.jpeg', },
  { name: "Rock 'n Roll", price: 4, menu_category_id: 25, img_path: 'kaka_udon_kitchen/menu/rock_n_roll.jpg', },
  { name: "Philadelphia Roll", price: 5, menu_category_id: 25, img_path: 'kaka_udon_kitchen/menu/philadelphia_roll.jpg', },
  { name: "Beef Specialty Udon", price: 9, menu_category_id: 26, img_path: 'kaka_udon_kitchen/menu/beef_specialty_udon.jpg', },
  { name: "Grilled Eel Specialty Udon", price: 9, menu_category_id: 26, img_path: 'kaka_udon_kitchen/menu/grilled_eel_specialty_udon.jpg', },
  { name: "Seafood Specialty Udon", price: 10, menu_category_id: 26, img_path: 'kaka_udon_kitchen/menu/seafood_specialty_udon.jpg', },
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


