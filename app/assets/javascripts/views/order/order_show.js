FoodMeNow.Views.OrderShow = Backbone.CompositeView.extend({
  className: 'order',
  template: JST['order/show'],
  render: function () {
    var renderedContent = this.template({ order: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },
  initialize: function () {
    this.listenTo(this.model, 'sync change', this.render);
    this.listenTo(this.model.orderItems(), 'add', this.addOrderItem);
    this.listenTo(this.model.orderItems(), 'remove', this.render);

    PubSub.subscribe('order', this.addItem.bind(this));

    var view = this;
    this.model.orderItems().each(function (item) {
      var orderItem = new FoodMeNow.Views.OrderItem({ model: item });
      view.addSubview('.order-items', orderItem.render());
    });
  },
  addItem: function (channel, item) {
    var newOrderItem = this.model.addItem(item);

    if (newOrderItem) {
      var orderItem = new FoodMeNow.Views.OrderItem({ model: item });
      this.addSubview('.order-items', orderItem.render());
      this.render();
    }
  }
});
