FoodMeNow.Models.CuisineTag = Backbone.Model.extend({
  urlRoot: '/api/cuisine_tags',
  restaurants: function () {
    if (!this._restaurants) {
      this._restaurants = new FoodMeNow.Collections.Restaurants();
    }
    return this._restaurants;
  },
  parse: function (response, options) {
    if (response.restaurants) {
      this.restaurants().set(response.restaurants, { parse: true });
      delete response.restaurants;
    }
    return response;
  }
});
