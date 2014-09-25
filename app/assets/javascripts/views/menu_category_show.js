FoodMeNow.Views.MenuCategoryShow = Backbone.CompositeView.extend({
  className: 'menu-category',
  template: JST['menu/category'],
  render: function () {
    var renderedTemplate = this.template({ category: this.model });
    this.$el.html(renderedTemplate);
    this.attachSubviews();
    return this;
  },
  initialize: function () {
    var items = this.model.menu_items();
    var itemIndex = new FoodMeNow.Views.MenuItemIndex({ collection: items });
    this.addSubview('.category-items', itemIndex.render());
  } 
});
