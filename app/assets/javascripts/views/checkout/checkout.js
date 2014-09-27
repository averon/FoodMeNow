FoodMeNow.Views.Checkout = Backbone.CompositeView.extend({
  template: JST['checkout/checkout'],
  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
    return this;
  },
  initialize: function () {
    var billing = new FoodMeNow.Views.Billing();
    this.addSubview('.billing-information', billing.render());

    var delivery = new FoodMeNow.Views.Delivery();
    this.addSubview('.delivery-details', delivery.render()); 
  },
  events: {
    'click .place-order': 'placeOrder'
  },
  placeOrder: function () {
    Backbone.history.navigate('#/confirmation')
  }
});
