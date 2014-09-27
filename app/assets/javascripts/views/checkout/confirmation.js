FoodMeNow.Views.Confirmation = Backbone.CompositeView.extend({
  template: JST['checkout/confirmation'],
  render: function () {
    this.$el.html(this.template());
    return this;
  }
});
