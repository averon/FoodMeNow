FoodMeNow.Routers.FoodMeNowRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },
  routes: {
    '': 'restaurantIndex',
    'restaurants/:id': 'menuShow',
    'checkout': 'checkout',
    'confirmation': 'confirmation'
  },
  restaurantIndex: function () {
    var restaurants = FoodMeNow.Collections.restaurants;
    var cuisines = FoodMeNow.Collections.cuisineTags;
    var restaurantIndex = new FoodMeNow.Views.RestaurantIndex();

    restaurants.fetch();
    cuisines.fetch();
    this.swapView(restaurantIndex);
  },
  menuShow: function (id) {
    var restaurant = FoodMeNow.Collections.restaurants.getOrFetch(id);
    var restaurantMenu = new FoodMeNow.Views.MenuShow({ model: restaurant });
    this.swapView(restaurantMenu);
  },
  checkout: function () {
    var checkout = new FoodMeNow.Views.Checkout();
    this.swapView(checkout);
  },
  confirmation: function () {
    var confirmation = new FoodMeNow.Views.Confirmation();
    this.swapView(confirmation);
  },
  swapView: function (newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$rootEl.html(newView.render().$el);
  }
});
