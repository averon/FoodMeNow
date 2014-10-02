FoodMeNow.Views.RestaurantItem = Backbone.View.extend({
  className: 'restaurant-item',
  tagName: 'li',
  template: JST['restaurant/item'],
  render: function () {
    var renderedContent = this.template({ restaurant: this.model });
    this.$el.html(renderedContent);
    this.addRating();
    this.addPrice();
    return this;
  },
  addPrice: function () {
    var price = parseInt(this.model.escape('price'));
    var $price = this.$('.price');

    for (var i = 0; i < price; i++) {
      $price.append($('<span class="glyphicon glyphicon-usd">'));
    }
  },
  addRating: function () {
    var rating = parseInt(this.model.escape('rating'));
    var $rating = this.$('.rating');

    for (var i = 0; i < rating; i++) {
      $rating.append($('<span class="glyphicon glyphicon-star">'));
    }
  }
});
