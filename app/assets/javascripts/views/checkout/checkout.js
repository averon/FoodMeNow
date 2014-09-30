FoodMeNow.Views.Checkout = Backbone.CompositeView.extend({
  template: JST['checkout/checkout'],
  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
    return this;
  },
  initialize: function () {
//    var deliveryAddresses = FoodMeNow.currentUser.deliveryAddresses();
//    _(deliveryAddresses).each(function (address) {
//      var savedDeliveryView = new FoodMeNow.Views.DeliverySaved({ model: address });
//      this.addSubview('.delivery-details', savedDeliveryView.render());
//    });

    if (FoodMeNow.currentUser) {
      var currentDeliveryAddress = FoodMeNow.currentUser.currentAddress();
      var currentDeliveryView = new FoodMeNow.Views.DeliverySaved({
        model: currentDeliveryAddress
      });
      this.addSubview('.delivery-details', currentDeliveryView.render());
    } else {
      this.newDeliveryView();
    }

    var billing = new FoodMeNow.Views.Billing();
    this.addSubview('.billing-information', billing.render());
  },
  events: {
    'click .place-order': 'placeOrder',
    'click .new-delivery-address': 'newDeliveryView',
  },
  placeOrder: function () {
    Backbone.history.navigate('#/confirmation')
  },
  newDeliveryView: function () {
    var currentViews = this.subviews('.delivery-details');
    if (currentViews.length > 0) {
      this.removeSubview('.delivery-details', currentViews[0]);
    }

    var newDeliveryView = new FoodMeNow.Views.DeliveryNew();
    this.addSubview('.delivery-details', newDeliveryView.render());
    this.render();
  }
});
