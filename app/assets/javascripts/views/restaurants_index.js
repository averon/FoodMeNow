FoodMeNow.Views.RestaurantIndex = Backbone.View.extend({
  tagName: 'ul',
  className: 'restaurant-index',
  render: function () {
    this.renderContent();
    return this;
  },
  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },
  renderContent: function () {
    var indexView = this;
    this.collection.each(function (restaurant) {
      var li = new FoodMeNow.Views.RestaurantItem({ model: restaurant });
      indexView.$el.append(li.render().$el);
    });
  }
});
