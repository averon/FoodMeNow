FoodMeNow.Models.User = Backbone.Model.extend({
  urlRoot: '/users',
  deliveryAddresses: function () {
    if (!this._deliveryAddresses) {
      this._deliveryAddresses = new FoodMeNow.Collections.DeliveryAddresses();
      this._deliveryAddresses.comparator = 'ord';
    }
    return this._deliveryAddresses;
  },
  currentAddress: function () {
    if (!this._currentAddress) {
      this._currentAddress = new FoodMeNow.Models.DeliveryAddress();
    }
    return this._currentAddress;
  },
  parse: function (response, options) {
    if (response.delivery_addresses) {
      this.deliveryAddresses().set(response.delivery_addresses, { parse: true });
      delete response.delivery_addresses;
    }
    if (response, options) {
      this.currentAddress().set(response.current_address, { parse: true });
      delete response.current_address;
    }
    return response;
  }
});
