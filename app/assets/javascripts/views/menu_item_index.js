FoodMeNow.Views.MenuItemIndex = Backbone.View.extend({
  className: 'menu-category',
  render: function () {
    this.renderSubviews();
    return this;
  },
  renderSubviews: function () {
    var view = this;
    this.collection.each(function (item) {
      var menuItem = new FoodMeNow.Views.MenuItemShow({ model: item });
      view.$el.append(menuItem.render().$el);
    });
  },
  capitalizeFirstLetter: function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1); 
  }
});
