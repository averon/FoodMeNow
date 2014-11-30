FoodMeNow.Collections.OrderItems = Backbone.Collection.extend({
  url: '/api/order_items',
  model: FoodMeNow.Models.OrderItems
});
