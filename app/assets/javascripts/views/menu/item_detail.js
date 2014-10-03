FoodMeNow.Views.ItemDetail = Backbone.View.extend({
  template: JST['menu/item_detail'],
  render: function () {
    this.$el.html(this.template({ item: this.model }));
    debugger;
    return this;
  },
  events: {
    'click .submit-item': 'addToCart'
  },
  addToCart: function (event) {
    event.preventDefault();
    PubSub.publish('order', this.model);
    FoodMeNow.removeModal('.item-detail-modal');
  }
});
