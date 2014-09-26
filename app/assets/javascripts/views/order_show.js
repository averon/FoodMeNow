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
    this.listenTo(this.model.orderItems(), 'add remove', this.render);

    PubSub.subscribe('order', this.addItem.bind(this));

    var orderItems = this.model.orderItems();
    var itemIndex = new FoodMeNow.Views.MenuItemIndex({ collection: orderItems });
    this.addSubview('.order-items', itemIndex);
  },
  events: {

  },
  addItem: function (channel, item) {
    this.model.addItem(item);
  }
});
