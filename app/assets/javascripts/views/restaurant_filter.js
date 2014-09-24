FoodMeNow.Views.RestaurantFilter = Backbone.View.extend({
  tagName: 'ul',
  className: 'restaurant-filter',
  template: JST['restaurant/filter'],
  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },
  render: function () {
    this.renderContent();
    return this;
  },
  renderContent: function () {
    var restaurantFilter = this;
    this.collection.each(function (cuisine) {
      var $li = $('<li>').html(cuisine.escape('name'))
      restaurantFilter.$el.append($li);
    });
  }
});
