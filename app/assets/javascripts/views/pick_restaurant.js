FoodMeNow.Views.PickRestaurant = Backbone.View.extend({
  template: JST['restaurant/pick'],
  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.renderSubviews();
    return this;
  },
  renderSubviews: function () {
    var restaurants = FoodMeNow.Collections.restaurants;
    var cuisines = FoodMeNow.Collections.cuisineTags;
    var restaurantFilter = new FoodMeNow.Views.RestaurantFilter({ collection: cuisines });
    var restaurantIndex = new FoodMeNow.Views.RestaurantIndex({ collection: restaurants });

    this.$('.filter').html(restaurantFilter.render().$el);
    this.$('.restaurants').html(restaurantIndex.render().$el);
  }
});
