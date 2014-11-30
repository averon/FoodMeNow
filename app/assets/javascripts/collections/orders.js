FoodMeNow.Collections.Orders = Backbone.Collection.extend({
  url: '/api/orders',
  model: FoodMeNow.Models.Order,
});

