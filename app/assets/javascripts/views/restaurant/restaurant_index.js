FoodMeNow.Views.RestaurantIndex = Backbone.CompositeView.extend({
  className: 'restaurant-index',
  template: JST['restaurant/index'],
  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },
  initialize: function () {
    var view = this;
    this.restaurants = FoodMeNow.Collections.restaurants;
    var cuisines = FoodMeNow.Collections.cuisineTags;
    var restaurantFilter = new FoodMeNow.Views.RestaurantFilter({ collection: cuisines });

    this.listenTo(this.restaurants, 'sync add', this.render);
    this.listenTo(this.restaurants, 'add', this.addRestaurantItem);
    this.listenTo(restaurantFilter, 'filterRestaurants', this.filterRestaurants);

    this.restaurants.each(function (restaurant) {
      view.addRestaurantItem(restaurant);
    });

    this.addSubview('.filter', restaurantFilter.render());
  },
  addRestaurantItem: function (restaurant) {
    var restaurantItem = new FoodMeNow.Views.RestaurantItem({ model: restaurant });
    this.addSubview('.restaurants', restaurantItem.render());
  },
  filterRestaurants: function (options) {
    var view = this;
    this.removeAllSubviews('.restaurants');

    this.restaurants.filters.cuisines = options.cuisines;
    this.restaurants.filters.ratings = options.ratings;
    this.restaurants.filters.prices = options.prices;

    this.restaurants.filtered().each(function (restaurant) {
      view.addRestaurantItem(restaurant);
    });
  }
});
