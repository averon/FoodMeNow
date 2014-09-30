FoodMeNow.Collections.CuisineTags = Backbone.Collection.extend({
  url: '/api/cuisine_tags',
  model: FoodMeNow.Models.CuisineTag
});

FoodMeNow.Collections.cuisineTags = new FoodMeNow.Collections.CuisineTags();
FoodMeNow.Collections.cuisineTags.fetch();
