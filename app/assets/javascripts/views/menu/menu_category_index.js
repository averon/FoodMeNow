FoodMeNow.Views.MenuCategoryIndex = Backbone.CompositeView.extend({
//  tagName: 'ul',
//  className: 'menu-categories',
  render: function () {
    this.attachSubviews();
    return this;
  },
  initialize: function () {
    var view = this;
    var categories = this.model.menuCategories();
    categories.each(function (category) {
      view.addMenuCategory(category);
    });

    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.menuCategories(), 'add', this.addMenuCategory);
  },
  addMenuCategory: function (category) {
    var categoryShow = new FoodMeNow.Views.MenuCategoryShow({ model: category });
    this.addSubview('.category-items', categoryShow.render());
  },
});
