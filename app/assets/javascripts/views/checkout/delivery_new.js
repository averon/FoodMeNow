FoodMeNow.Views.DeliveryNew = Backbone.View.extend({
  tagName: 'form',
  className: 'user-delivery-info',
  template: JST['checkout/delivery_new'],
  render: function () {
    var renderedContent = this.template({ delivery_address: this.model });
    debugger;
    this.$el.html(renderedContent);
    return this;
  },
});
