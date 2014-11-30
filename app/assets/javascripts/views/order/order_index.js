FoodMeNow.Views.OrderIndex = Backbone.View.extend({
  className: 'order-index',
  template: JST['order/index'],
  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.renderContent();
    return this;
  },
  initialize: function () {
    this.listenTo(this.model, 'sync', this.renderContent);
  },
  renderContent: function () {
    this.$('.orders').empty();
    this.model.orders().forEach(function (order) {
      var $order = $('<div class="order">');
      var $restaurant = $('<span class="order-restaurant">').html(order.get('restaurant').name);
      var $total = $('<span class="order-total">').html(order.escape('total'));
      var $placedAt = $('<span class="order-placed-at">').html(order.escape('placed_at'));

      $order.append($placedAt);
      $order.append($restaurant);
      $order.append($total);

      this.$('.orders').append($order);
    }.bind(this));
  }
});
