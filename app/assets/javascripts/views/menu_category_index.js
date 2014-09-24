FoodMeNow.Views.MenuCategoryIndex = Backbone.View.extend({
  className: 'menu-categories',
  render: function () {
    this.renderSubviews();
    return this;
  },
  renderSubviews: function () {
    var view = this;
    var categories = this.model.menu_categories();
    categories.each(function (category) {
      var categoryShow = new FoodMeNow.Views.MenuCategoryShow({ model: category });
      view.$el.append(categoryShow.render().$el);
    });
  }
});
