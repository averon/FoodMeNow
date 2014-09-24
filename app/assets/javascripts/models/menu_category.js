FoodMeNow.Models.MenuCategory = Backbone.Model.extend({
  urlRoot: '/api/menu_categories',
  menu_items: function () {
    if (!this._menu_items) {
      this._menu_items = new FoodMeNow.Collections.MenuItems();
    }
    return this._menu_items;
  },
  parse: function (response, options) {
    if (response.menu_items) {
      this.menu_items().set(response.menu_items, { parse: true });
      delete response.menu_items;
    }
    return response;
  }
});
