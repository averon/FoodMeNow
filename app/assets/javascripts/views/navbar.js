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
    this.listenTo(FoodMeNow.router, 'route', this.hideCart);
    this.addSubview('.order-cart', this.model.render());
    this.closable = false;
  },
  events: {
    'click .cart-button': function () { this.closable = !this.closable; },
    'hide.bs.dropdown .btn-group': function () { return this.closable; },
    'click .sign-in': 'signIn',
    'click .sign-out': 'signOut'
  },
  signIn: function (event) {
    event.preventDefault();
    $('#checkout').modal('show');
  },
  signOut: function (event) {
    event.preventDefault();
    FoodMeNow.currentUser.clear();
  },
  hideCart: function (route) {
    if (route === 'confirmation') {
      this.$('.dropdown').hide();
    } else {
      this.$('.dropdown').show();
    }
  }
});
