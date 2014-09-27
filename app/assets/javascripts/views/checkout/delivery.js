FoodMeNow.Views.Delivery = Backbone.View.extend({
  tagName: 'form',
  className: 'user-delivery-info',
  template: JST['checkout/delivery'],
  render: function () {
    this.$el.html(this.template());
    return this;
  }
});
