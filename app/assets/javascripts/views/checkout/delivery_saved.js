FoodMeNow.Views.DeliverySaved = Backbone.View.extend({
  className: 'saved-delivery-info',
  template: JST['checkout/delivery_saved'],
  render: function () {
    var renderedContent = this.template({
      delivery_address: this.model
    });

    this.$el.html(renderedContent);
    return this;
  },
});
