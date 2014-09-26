FoodMeNow.Views.Checkout = Backbone.CompositeView.extend({
  template: JST['checkout/checkout'],
  render: function () {
    this.$el.html(this.template());
    return this;
  }
});
