FoodMeNow.Views.Billing = Backbone.View.extend({
  tagName: 'form',
  className: 'user-billing-info',
  template: JST['checkout/billing'],
  render: function () {
    this.$el.html(this.template());
    return this;
  }
});
