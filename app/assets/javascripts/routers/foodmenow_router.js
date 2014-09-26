FoodMeNow.Routers.FoodMeNowRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },
  routes: {
    '': 'pickRestaurant',
    'restaurants/:id': 'restaurantMenu'
  },
  pickRestaurant: function () {
    var restaurants = FoodMeNow.Collections.restaurants;
    var cuisines = FoodMeNow.Collections.cuisineTags;
    var pickRestaurant = new FoodMeNow.Views.RestaurantIndex();

    restaurants.fetch();
    cuisines.fetch();
    this.swapView(pickRestaurant);
  },
  restaurantMenu: function (id) {
    var restaurant = FoodMeNow.Collections.restaurants.getOrFetch(id);
    var restaurantMenu = new FoodMeNow.Views.MenuShow({ model: restaurant });
    this.swapView(restaurantMenu);
  },
  swapView: function (newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$rootEl.html(newView.render().$el);
  }
});
