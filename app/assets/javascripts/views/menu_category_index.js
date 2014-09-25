FoodMeNow.Views.MenuCategoryIndex = Backbone.CompositeView.extend({
  template: JST['menu/categories'],
  className: 'modular-view',
  render: function () {
    var renderedContent = this.template()
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },
  initialize: function () {
    var view = this;
    var categories = this.model.menu_categories();
    categories.each(function (category) {
      var categoryShow = new FoodMeNow.Views.MenuCategoryShow({ model: category });
      debugger;
      view.addSubview('.menu-categories', categoryShow.render());
    });
  } 
});
