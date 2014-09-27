FoodMeNow.Views.MenuShow = Backbone.CompositeView.extend({
  className: 'restaurant-menu',
  template: JST['restaurant/menu'],
  render: function () {
    var renderedContent = this.template({ restaurant: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.menuCategories(), 'sync add', this.render);
    this.listenTo(this.model.menuCategories(), 'add', this.addMenuCategory);
    
    var checkout = new FoodMeNow.Views.SignIn();
    this.addSubview('.checkout', checkout.render());

    var view = this;
    var categories = this.model.menuCategories();
    categories.each(function (category) {
      view.addMenuCategory(category);
    });
  },
  addMenuCategory: function (category) {
    var categoryShow = new FoodMeNow.Views.MenuCategoryShow({ model: category });
    this.addSubview('.menu', categoryShow.render());
  }
});
