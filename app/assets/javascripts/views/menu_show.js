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
    
    var userOrder = new FoodMeNow.Views.OrderShow({ model: this.order() });
    this.addSubview('.user-order', userOrder.render()); 

    var categoryIndex = new FoodMeNow.Views.MenuCategoryIndex({ model: this.model });
    this.addSubview('.menu', categoryIndex.render());
  },
  order: function () {
    this._order = this._order || new FoodMeNow.Models.Order();
    return this._order;
  }
});
