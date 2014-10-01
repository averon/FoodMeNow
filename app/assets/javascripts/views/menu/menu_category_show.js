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
    var view = this;
    this.model.menuItems().each(function (item) {
      view.addMenuItem(item);
    });
    this.listenTo(this.model.menuItems(), 'add', this.addMenuItem);
    this.listenTo(this.model.menuItems(), 'add', this.render);
  },
  addMenuItem: function (item) {
    var itemShow = new FoodMeNow.Views.MenuItem({ model: item });
    this.addSubview('.category-items', itemShow.render());
  },
  capitalizeFirstLetter: function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1); 
  } 
});
