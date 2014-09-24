FoodMeNow.Views.RestaurantMenu = Backbone.View.extend({
  className: 'restaurant-menu',
  template: JST['restaurant/menu'],
  render: function () {
    var renderedContent = this.template({ restaurant: this.model });
    this.$el.html(renderedContent);
    this.renderSubviews();
    return this;
  },
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },
  renderSubviews: function () {
    var menu = this;
    var $restaurantName = $('.restaurant-name');
    var $menuItems = $('.menu-items');
    var name = this.model.escape('name');

    $restaurantName.append($('<h3>').html(name));

    var categoriesShow = new FoodMeNow.Views.MenuCategoryIndex({ model: this.model });
    $menuItems.append(categoriesShow.render().$el);

    //this.model.menu_categories().each(function (category) {
    //  var itemIndex = new FoodMeNow.Views.MenuItemIndex({ model: category });
    //  $menuItems.append(itemIndex.render().$el);
    //});
  }
});
