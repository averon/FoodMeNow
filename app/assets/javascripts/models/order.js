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
    } else if (existingItem) {
      this._orderItems.remove(existingItem);
    }
    this.calculate();
  },
  calculate: function () {
    var price, tax, tip, taxAndGratuity, total, preTax = 0;

    this._orderItems.each(function (item) {
      price = parseInt(item.escape('price'));
      numOrders = parseInt(item.escape('numOrders'));
      preTax += price * numOrders;
    });

    tax = preTax * 0.085;
    tip = (this.isEmpty() ? 0 : 2);
    taxAndGratuity = tax + tip;

    total = preTax + tax + tip; 
    this.set({ subtotal: preTax.toFixed(2), taxAndGratuity: taxAndGratuity.toFixed(2), total: total.toFixed(2) });
  },
  isEmpty: function () {
    return this._orderItems.length === 0
  }
});
