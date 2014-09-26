FoodMeNow.Views.RestaurantIndex = Backbone.CompositeView.extend({
  tagName: 'ul',
  className: 'restaurant-index',
  render: function () {
    this.attachSubviews();
    return this;
  },
  initialize: function () {
    this.listenTo(this.collection, 'sync add', this.render);
    this.listenTo(this.collection, 'add', this.addRestaurantItem);

    var indexView = this;
    this.collection.each(function (restaurant) {
      var itemShow = new FoodMeNow.Views.RestaurantItem({ model: restaurant });
      indexView.addSubview('.restaurant-index', itemShow.render());
    });
  },
  addRestaurantItem: function (restaurant) {
    var restaurantItem = new FoodMeNow.Views.RestaurantItem({ model: restaurant });
    this.addSubview('.restaurant-index', restaurantItem.render());
  }
});
