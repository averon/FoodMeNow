FoodMeNow.Models.MenuCategory = Backbone.Model.extend({
  urlRoot: '/api/menu_categories',
  menuItems: function () {
    if (!this._menuItems) {
      this._menuItems = new FoodMeNow.Collections.MenuItems();
    }
    return this._menuItems;
  },
  parse: function (response, options) {
    if (response.menu_items) {
      this.menuItems().set(response.menu_items, { parse: true });
      delete response.menu_items;
    }
    return response;
  }
});
