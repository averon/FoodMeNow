FoodMeNow.Collections.Restaurants = Backbone.Collection.extend({
  url: '/api/restaurants',
  model: FoodMeNow.Models.Restaurant
});

FoodMeNow.Collections.restaurants = new FoodMeNow.Collections.Restaurants();

