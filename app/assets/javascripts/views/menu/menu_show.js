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
    
    var userOrder = new FoodMeNow.Views.OrderShow({ model: this.order() });
    this.addSubview('.user-order', userOrder.render()); 

    var view = this;
    var categories = this.model.menuCategories();
    categories.each(function (category) {
      view.addMenuCategory(category);
    });
  },
  addMenuCategory: function (category) {
    var categoryShow = new FoodMeNow.Views.MenuCategoryShow({ model: category });
    this.addSubview('.menu', categoryShow.render());
  },
  order: function () {
    this._order = this._order || new FoodMeNow.Models.Order();
    return this._order;
  }
});
