FoodMeNow.Views.Checkout = Backbone.CompositeView.extend({
  template: JST['checkout/checkout'],
  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
    return this;
  },
  initialize: function () {
    if (!FoodMeNow.currentUser.isNew()) {
      this.currentDeliveryView();
      this.currentBillingView();
    } else {
      this.newDeliveryView();
      this.newBillingView();
    }
  },
  events: {
    'click .place-order': 'placeOrder',
    'click .new-delivery-address': 'newDeliveryView',
    'click .new-payment-method': 'newBillingView'
  },
  placeOrder: function () {
    if (FoodMeNow.currentOrder.isEmpty()) {
      $('#fmn-alerts').html('<div class="alert alert-danger">Please add items to cart to checkout!</div>');
    } else {
      FoodMeNow.currentOrder.save({}, {
        success: function (response, options) {
          debugger;
        }
      });
      Backbone.history.navigate('#/confirmation');
    }
  },
  currentDeliveryView: function () {
    var currentDeliveryAddress = FoodMeNow.currentUser.currentAddress();
    if (currentDeliveryAddress) {
      var currentDeliveryView = new FoodMeNow.Views.DeliverySaved({
        model: currentDeliveryAddress
      });
      this.addSubview('.delivery-details', currentDeliveryView.render());
    } else {
      this.newDeliveryView();
    }
  },
  newDeliveryView: function () {
    var currentViews = this.subviews('.delivery-details');
    if (currentViews.length > 0) {
      this.removeSubview('.delivery-details', currentViews[0]);
    }

    var currentAddress = FoodMeNow.currentUser.currentAddress();
    var newDeliveryView = new FoodMeNow.Views.DeliveryNew({ model: currentAddress });
    this.addSubview('.delivery-details', newDeliveryView.render());
    this.render();
  },
  currentBillingView: function () {
    var currentBilling = FoodMeNow.currentUser.currentBilling();
    if (currentBilling) {
      var billing = new FoodMeNow.Views.BillingSaved({
        model: currentBilling
      });
      this.addSubview('.billing-information', billing.render());
    }
  },
  newBillingView: function () {
    var currentViews = this.subviews('.billing-information');
    if (currentViews.length > 0) {
      this.removeSubview('.billing-information', currentViews[0]);
    }

    var currentBilling = FoodMeNow.currentUser.currentBilling();
    var newBillingView = new FoodMeNow.Views.BillingNew({
      model: currentBilling
    });
    this.addSubview('.billing-information', newBillingView.render());
    this.render();
  },
});
