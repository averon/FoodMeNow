FoodMeNow.Views.MenuCategoryShow = Backbone.View.extend({
  className: 'menu-category',
  template: JST['menu/category'],
  render: function () {
    var renderedTemplate = this.template({ category: this.model });
    this.$el.html(renderedTemplate);
    this.renderSubviews();
    return this;
  },
  renderSubviews: function () {
    var items = this.model.menu_items();
    var itemIndex = new FoodMeNow.Views.MenuItemIndex({ collection: items });
    this.$el.append(itemIndex.render().$el);
  }
});
