FoodMeNow.Collections.MenuItems = Backbone.Collection.extend({
  url: '/api/menu_items',
  model: FoodMeNow.Models.MenuItem
});
