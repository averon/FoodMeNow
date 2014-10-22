FoodMeNow.Views.Navbar = Backbone.CompositeView.extend({
  className: 'navbar-default navbar-fixed-top',
  template: JST['navbar'],
  render: function () {
    this.$el.html(this.template({ order: this.model.model }));
    this.attachSubviews();
    if (!FoodMeNow.currentOrder.isNew()) {
      this.$('.btn-group').addClass('open');
    }
    return this;
  },
  initialize: function () {
    this.listenTo(FoodMeNow.currentUser, 'change', this.render);
    this.listenTo(FoodMeNow.currentOrder.orderItems(), 'add change', this.render);
    this.listenTo(FoodMeNow.router, 'route', this.orderConfirmation);
    this.addSubview('.order-cart', this.model.render());
    this.closable = false;
  },
  events: {
    'click .cart-button': function () { this.closable = !this.closable; },
    'hide.bs.dropdown .btn-group': function () { return this.closable; },
    'click .checkout-button': 'checkoutButtonHandler',
    'click .sign-in': 'signIn',
    'click .sign-out': 'signOut'
  }, 
  signIn: function (event) {
    event.preventDefault();
    $('#checkout').modal('show');
  },
  signOut: function (event) {
    event.preventDefault();
    $.ajax({
      url: '/sign_out',
      success: function () {
        FoodMeNow.currentUser.clear();
      }
    });
  },
  checkoutButtonHandler: function () {
    if (FoodMeNow.currentUser.isNew()) {
      $('#checkout').modal('show');
    } else {
      Backbone.history.navigate('#/checkout')
    }
  },
  orderConfirmation: function (route) {
    if (route === 'confirmation') {
      this.model.removeAllSubviews('.order-items');
      FoodMeNow.currentOrder.orderItems().reset();
      this.render();
    } else if (route === 'checkout') {
      this.$('.checkout-button').hide();
      this.$('.dropdown').show();
    } else {
      this.$('.checkout-button').show();
      this.$('.dropdown').show();
    }
  }
});
