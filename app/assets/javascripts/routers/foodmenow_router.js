FoodMeNow.Routers.FoodMeNowRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },
  routes: {
    '': 'restaurantIndex',
    'san_francisco': 'restaurantIndex',
    'restaurants/:id': 'menuShow',
    'checkout': 'checkout',
    'confirmation': 'confirmation',
    'orders': 'orders'
  },
  restaurantIndex: function () {
    var restaurantIndex = new FoodMeNow.Views.RestaurantIndex();
    FoodMeNow.Collections.restaurants.fetch();
    FoodMeNow.Models.cuisines.fetch();

    this.swapView(restaurantIndex);
    Backbone.history.navigate('#/san_francisco');
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
  orders: function () {
    var orderIndex = new FoodMeNow.Views.OrderIndex({ model: FoodMeNow.currentUser });
    this.swapView(orderIndex);
  },
  swapView: function (newView) {
    $('#fmn-alerts').empty();
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$rootEl.html(newView.render().$el);
  }
});
