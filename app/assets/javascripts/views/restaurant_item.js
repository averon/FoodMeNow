FoodMeNow.Views.RestaurantItem = Backbone.View.extend({
  id: function () { return 'r-id-' + this.model.id },
  tagName: 'li',
  template: JST['restaurant/show'],
  render: function () {
    var renderedContent = this.template({ restaurant: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
