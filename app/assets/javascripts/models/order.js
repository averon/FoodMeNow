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
    this.orderItems().add(orderItem);
    this.calculate();
  },
  removeItem: function (orderItem) {
    var idx = this.menuItems.indexOf(orderItem);
    this.orderItems().splice(idx, 1);
    this.calculate();
  },
  calculate: function () {
    var price, tax, tip, total, preTax = 0;

    this.orderItems().each(function (item) {
      price = parseInt(item.escape('price'));
      preTax += price;
    });

    tax = preTax * 0.065;
    tip = 2;
    total = preTax + tax + tip; 
    this.set({ price: total.toFixed(2), tax: tax.toFixed(2), tip: tip.toFixed(2) });
  }
});
