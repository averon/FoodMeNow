FoodMeNow.Views.RestaurantShow = Backbone.CompositeView.extend({
  className: 'restaurant-menu',
  template: JST['restaurant/menu'],
  render: function () {
    var renderedContent = this.template({ restaurant: this.model });
    this.$el.html(renderedContent);
    this.renderSubviews();
    return this;
  },
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },
  renderSubviews: function () {
    var menu = this;
    var $menuItems = this.$('.menu-items');

    var categoryIndex = new FoodMeNow.Views.MenuCategoryIndex({ model: this.model });
    $menuItems.html(categoryIndex.render().$el);
  }
});
