FoodMeNow.Collections.MenuCategories = Backbone.Collection.extend({
  url: '/api/menu_categories',
  model: FoodMeNow.Models.MenuCategory
});
