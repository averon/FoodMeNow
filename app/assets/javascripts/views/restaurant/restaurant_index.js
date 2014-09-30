FoodMeNow.Views.RestaurantIndex = Backbone.CompositeView.extend({
  className: 'restaurant-index',
  template: JST['restaurant/pick'],
  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },
  initialize: function () {
    var restaurants = FoodMeNow.Collections.restaurants;
    var cuisines = FoodMeNow.Collections.cuisineTags;
    var restaurantFilter = new FoodMeNow.Views.RestaurantFilter({ collection: cuisines });

    this.listenTo(restaurants, 'sync add', this.render);
    this.listenTo(restaurants, 'add', this.addRestaurantItem);

    var view = this;
    restaurants.each(function (restaurant) {
      view.addRestaurantItem(restaurant);
    });

    this.addSubview('.filter', restaurantFilter.render());
  },
  addRestaurantItem: function (restaurant) {
    var restaurantItem = new FoodMeNow.Views.RestaurantItem({ model: restaurant });
    this.addSubview('.restaurants', restaurantItem.render());
  }
});
