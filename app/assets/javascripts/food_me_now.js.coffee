window.FoodMeNow =
  Models: {}
  Collections: {}
  Views: {}
  Routers: {}
  initialize: ->
    new FoodMeNow.Routers.FoodMeNowRouter({
      $rootEl: $('#main')
    });
    Backbone.history.start();

$(document).ready ->
  FoodMeNow.initialize()
