FoodMeNow.Models.Restaurant = Backbone.Model.extend({
  urlRoot: '/api/restaurants',
  menu_categories: function () {
    if (!this._menu_categories) {
      this._menu_categories = new FoodMeNow.Collections.MenuCategories();
      this._menu_categories.comparator = 'ord';
    }
    return this._menu_categories
  },
  parse: function (response, options) {
    if (response.menu_categories) {
      this.menu_categories().set(response.menu_categories, { parse: true });
      delete response.menu_categories;
    }
    return response;
  }
});
