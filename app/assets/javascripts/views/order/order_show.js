FoodMeNow.Views.OrderShow = Backbone.CompositeView.extend({
  className: 'order',
  template: JST['order/show'],
  render: function () {
    var renderedContent = this.template({ order: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();
    this.toggleDropdown();
    return this;
  },
  initialize: function () {
    this.listenTo(this.model, 'sync change', this.render);

    PubSub.subscribe('order', this.addItem.bind(this));

    var view = this;
    this.model.orderItems().each(function (item) {
      this.newItem(item);
    });

  },
  addItem: function (channel, item) {
    var newOrderItem = this.model.addItem(item);

    if (newOrderItem) {
      this.newItem(item);
      this.render();
    }
  },
  removeItem: function (itemView) {
    this.model.removeItem(itemView.model);
    if (!this.model.orderItems().get(itemView.model)) {
      this.removeSubview('.order-items', itemView);
    }
  },
  newItem: function (item) {
    var orderItems = this.model.orderItems();
    var orderItem = new FoodMeNow.Views.OrderItem({ model: item });
    this.listenTo(orderItem, 'removeOrderItem', this.removeItem);

    this.addSubview('.order-items', orderItem.render());
 },
 toggleDropdown: function () { 
    if (!this.model.isEmpty()) {
      $('.dropdown').addClass('open');
    } else {
      $('.dropdown').removeClass('open');
    }
 }
});
