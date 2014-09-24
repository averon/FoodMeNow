FoodMeNow.Collections.Restaurants = Backbone.Collection.extend({
  url: '/api/restaurants',
  model: FoodMeNow.Models.Restaurant,
  getOrFetch: function (id) {
    var restaurants = this;
    var restaurant;
    if (restaurant = this.get(id)) {
      restaurant.fetch(); 
    } else {
      restaurant = new FoodMeNow.Models.Restaurant({ id: id});
      restaurant.fetch({
        success: function () {
          restaurants.add(restaurant);
        }
      });
    }
    return restaurant;
  }
});

FoodMeNow.Collections.restaurants = new FoodMeNow.Collections.Restaurants();

