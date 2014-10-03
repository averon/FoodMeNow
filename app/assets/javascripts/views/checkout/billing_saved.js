FoodMeNow.Views.BillingSaved = Backbone.View.extend({
  className: 'saved-checkout-info',
  template: JST['checkout/billing_saved'],
  render: function () {
    this.$el.html(this.template({ payment_method: this.model }));
    return this;
  }
});
