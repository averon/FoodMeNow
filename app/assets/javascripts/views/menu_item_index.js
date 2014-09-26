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
    this.listenTo(this.collection, 'add', this.addMenuItem);
    this.listenTo(this.collection, 'add remove', this.render);
  },
  addMenuItem: function (item) {
    var itemShow = new FoodMeNow.Views.MenuItemShow({ model: item });
    this.addSubview('.menu-items', itemShow.render());
  },
  capitalizeFirstLetter: function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1); 
  }
});
