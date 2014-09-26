FoodMeNow.Views.PickRestaurant = Backbone.CompositeView.extend({
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
    var restaurantIndex = new FoodMeNow.Views.RestaurantIndex({ collection: restaurants });

    this.addSubview('.filter', restaurantFilter.render());
    this.addSubview('.restaurants', restaurantIndex.render());
  }
});
