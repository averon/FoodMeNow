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
    'change input:checkbox': 'triggerFilter'
  },
  renderContent: function () {
    var restaurantFilter = this;
    this.collection.each(function (cuisine) {
      var csn = cuisine.escape('name');
      var $label = $('<label class="cuisine-filter">');
      var $input = $label.html('<input type="checkbox" name="' + csn + '">' + csn);
      var $li = $('<li class="filter-item">').html($input);
      
      restaurantFilter.$('.cuisine-index').append($li);
    });
  },
  triggerFilter: function (event) {
    var cuisines, ratings, prices, options;
    var target = $(event.currentTarget);

    var checkedItems = this.$('input:checked');
    var options = this.constructOptionsHash(checkedItems);

    this.trigger('filterRestaurants', options);
  },
  constructOptionsHash: function (checkedItems) {
    options = {
      cuisines: [],
      ratings: [],
      prices: []
    }

    checkedItems.each(function (idx, filter) {
      var parentEl = $(filter).parent();
      if (parentEl.hasClass('cuisine-filter')) {
        options.cuisines.push(filter.getAttribute('name'));
      }
      else if (parentEl.hasClass('rating-filter')) {
        options.ratings.push(filter.getAttribute('name')[0]);
      }
      else if (parentEl.hasClass('price-filter')) {
        options.prices.push(filter.getAttribute('name')[0]);
      }
    });

    return options;
  }
});
