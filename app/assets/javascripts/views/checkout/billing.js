FoodMeNow.Views.Billing = Backbone.View.extend({
  tagName: 'form',
  className: 'user-billing-info',
  template: JST['checkout/billing'],
  render: function () {
    debugger;
    this.$el.html(this.template({ payment_method: this.model }));
    return this;
  }
});
