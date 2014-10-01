FoodMeNow.Views.BillingSaved = Backbone.View.extend({
  tagName: 'form',
  className: 'user-billing-info',
  template: JST['checkout/billing_saved'],
  render: function () {
    this.$el.html(this.template({ payment_method: this.model }));
    return this;
  }
});
