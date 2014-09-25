FoodMeNow.Views.MenuItemIndex = Backbone.CompositeView.extend({
  tagName: 'ul',
  className: 'menu-items',
  render: function () {
    this.attachSubviews();
    return this;
  },
  initialize: function () {
    var view = this;
    this.collection.each(function (item) {
      var menuItem = new FoodMeNow.Views.MenuItemShow({ model: item });
      view.addSubview('.menu-items', menuItem.render());
    });
  },
  capitalizeFirstLetter: function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1); 
  }
});
