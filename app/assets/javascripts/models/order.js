FoodMeNow.Models.Order = Backbone.Model.extend({
  urlRoot: '/api/orders',
  initialize: function () {
    this.set({ price: "0.00", tax: "0.00", tip: "0.00" });
  },
  orderItems: function () {
    this._orderItems = this._orderItems ||
                    new FoodMeNow.Collections.MenuItems();

    return this._orderItems;
  },
  addItem: function (orderItem) {
    var existingItem = this.orderItems().get(orderItem);

    if (existingItem) {
      existingItem.set({numOrders: existingItem.get('numOrders') + 1});
      this.calculate();
    } else {
      this.orderItems().add(orderItem.set({ numOrders: 1 }));
      this.calculate();
      return new FoodMeNow.Views.OrderItem({ model: this });
    }
  },
  removeItem: function (orderItem) {
    var existingItem = this.orderItems().get(orderItem);
    if (existingItem && existingItem.get('numOrders') > 1) {
      existingItem.set({ numOrders: existingItem.get('numOrders') - 1 });
      this.calculate();
    } else if (existingItem) {
      this.orderItems().remove(existingItem);
      this.calculate();
    }
  },
  calculate: function () {
    var price, tax, tip, total, preTax = 0;

    this.orderItems().each(function (item) {
      price = parseInt(item.escape('price'));
      numOrders = parseInt(item.escape('numOrders'));
      preTax += price * numOrders;
    });

    tax = preTax * 0.085;
    tip = 2;
    total = preTax + tax + tip; 
    this.set({ price: total.toFixed(2), tax: tax.toFixed(2), tip: tip.toFixed(2) });
  }
});
