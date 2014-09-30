FoodMeNow.Collections.DeliveryAddresses = Backbone.Collection.extend({
  url: '/api/delivery_addresses',
  model: FoodMeNow.Models.DeliveryAddress
});
