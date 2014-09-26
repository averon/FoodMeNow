FoodMeNow.Views.RestaurantFilter = Backbone.View.extend({
  tagName: 'ul',
  className: 'restaurant-filter',
  template: JST['restaurant/filter'],
  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },
  render: function () {
    this.$el.html(this.template());
    this.renderContent();
    return this;
  },
  renderContent: function () {
    var restaurantFilter = this;
    this.collection.each(function (cuisine) {
      var csn = cuisine.escape('name');
      var $li = $('<li>').html('<input type="checkbox" name="' + csn + '">' + csn);
      restaurantFilter.$el.append($li);
    });
  }
});
