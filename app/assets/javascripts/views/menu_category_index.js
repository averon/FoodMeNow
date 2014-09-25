FoodMeNow.Views.MenuCategoryIndex = Backbone.CompositeView.extend({
  tagName: 'ul',
  className: 'menu-categories',
  render: function () {
    this.attachSubviews();
    return this;
  },
  initialize: function () {
    var view = this;
    var categories = this.model.menu_categories();
    categories.each(function (category) {
      var categoryShow = new FoodMeNow.Views.MenuCategoryShow({ model: category });
      view.addSubview('.menu-categories', categoryShow.render());
    });
  } 
});
