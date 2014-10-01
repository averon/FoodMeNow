FoodMeNow.Views.MenuShow = Backbone.CompositeView.extend({
  className: 'restaurant-menu',
  template: JST['restaurant/menu'],
  render: function () {
    var renderedContent = this.template({ restaurant: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.menuCategories(), 'add', this.addMenuCategory);

    PubSub.subscribe('launchItemModal', this.launchItemModal.bind(this));
  },
  addMenuCategory: function (category) {
    var categoryShow = new FoodMeNow.Views.MenuCategoryShow({ model: category });
    this.addSubview('.menu', categoryShow.render());
  },
  launchItemModal: function (channel, item) {
    this.removeAllSubviews('.item-details');

    var itemDetailModal = new FoodMeNow.Views.ItemDetail({ model: item });
    this.addSubview('.item-details', itemDetailModal.render());

    this.attachSubviews();
    this.$('.item-detail-modal').modal('show');
  }
});
