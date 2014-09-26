FoodMeNow.Views.OrderItem = Backbone.View.extend({
  tagName: 'ul',
  className: 'order-item',
  template: JST['order/item'],
  render: function () {
    var renderedContent = this.template({ item: this.model });
    this.$el.html(renderedContent);
    return this;
  },
  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
  }
});
