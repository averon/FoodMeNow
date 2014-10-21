FoodMeNow.Views.RestaurantFilter = Backbone.View.extend({
  className: 'restaurant-filter',
  template: JST['restaurant/filter'],
  initialize: function () {
    this.listenTo(FoodMeNow.Models.cuisines, 'sync', this.renderContent);
  },
  render: function () {
    this.$el.html(this.template());
    return this;
  },
  events: {
    'change input:checkbox': 'triggerFilter',
    'click .filter-header': 'toggleFilterDropdown'
  },
  renderContent: function () {
    var restaurantFilter = this;
    this.$('.cuisine-index').empty();
    FoodMeNow.Models.cuisines.values().forEach(function (cuisine) {
      var $label = $('<label class="cuisine-filter">');
      var $input = $label.html('<input type="checkbox" name="' + cuisine + '">' + cuisine);
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
  },
  toggleFilterDropdown: function (event) {
    var $target = $(event.currentTarget);
    var $header = $target.find('span');
    var $filterIndex = $target.parent().find('.filter-index');
    
    if ($header.hasClass('glyphicon-minus')) {
      $header.removeClass('glyphicon-minus');
      $header.addClass('glyphicon-plus'); 
      $filterIndex.hide()

    } else if ($header.hasClass('glyphicon-plus')) {
      $header.removeClass('glyphicon-plus');
      $header.addClass('glyphicon-minus');
      $filterIndex.show();
    }
  }
});
