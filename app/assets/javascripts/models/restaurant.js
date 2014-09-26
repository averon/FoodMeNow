FoodMeNow.Models.Restaurant = Backbone.Model.extend({
  urlRoot: '/api/restaurants',
  menuCategories: function () {
    if (!this._menuCategories) {
      this._menuCategories = new FoodMeNow.Collections.MenuCategories();
      this._menuCategories.comparator = 'ord';
    }
    return this._menuCategories
  },
  parse: function (response, options) {
    if (response.menu_categories) {
      this.menuCategories().set(response.menu_categories, { parse: true });
      delete response.menu_categories;
    }
    return response;
  }
});
