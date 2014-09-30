FoodMeNow.Views.RestaurantFilter = Backbone.View.extend({
  className: 'restaurant-filter',
  template: JST['restaurant/filter'],
  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },
  render: function () {
    this.$el.html(this.template());
    this.renderContent();
    return this;
  },
  events: {
    'click .cuisine-tag': 'triggerFilter'
  },
  renderContent: function () {
    var restaurantFilter = this;
    this.collection.each(function (cuisine) {
      var csn = cuisine.escape('name');
      var $li = $('<li class="cuisine-tag">').html('<input type="checkbox" name="' + csn + '">' + csn);
      restaurantFilter.$('.cuisine-index').append($li);
    });
  },
  triggerFilter: function (event) {
    var $checkbox, $checked, cuisineNames;
    $checkbox = $(event.currentTarget).find('input');
    $checkbox.prop("checked", !$checkbox.prop("checked"));

    $checked = this.$('input:checked');
    cuisineNames = $.map($checked, function (cuisine) {
      return cuisine.getAttribute('name');
    });
    this.trigger('filterRestaurants', cuisineNames);
  }
});
