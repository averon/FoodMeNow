FoodMeNow.Views.Navbar = Backbone.CompositeView.extend({
  className: 'navbar-default navbar-fixed-top',
  template: JST['navbar'],
  render: function () {
    this.$el.html(this.template({ order: this.model.model }));
    this.attachSubviews();
    return this;
  },
  initialize: function () {
    this.addSubview('.order-cart', this.model.render());
  }
});
