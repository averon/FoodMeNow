window.FoodMeNow = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () { 
    new FoodMeNow.Routers.FoodMeNowRouter({
      $rootEl: $('#main'),
    });
    Backbone.history.start();
  },
  setGlobals: function () {
    FoodMeNow.currentUser;
    FoodMeNow.currentOrder = new FoodMeNow.Models.Order();
    FoodMeNow.currentCart = new FoodMeNow.Views.OrderShow({
      model: FoodMeNow.currentOrder
    });
    FoodMeNow.navbar = new FoodMeNow.Views.Navbar();
    FoodMeNow.$navbar = $('#fmn-navbar');
  }
}

$(document).ready(function () { 
  FoodMeNow.setGlobals();
  FoodMeNow.initialize();
});

Backbone.CompositeView = Backbone.View.extend({
  addSubview: function (selector, view) {
    this.subviews(selector).push(view);
  },
  remove: function () {
    Backbone.View.prototype.remove.call(this);
    _(this.subviews()).each(function (subviews) {
      _(subviews).each(function (subview) { subview.remove(); });
    });
  },
  removeSubview: function (selector, subview) {
    subview.remove();

    var subviews = this.subviews(selector);
    subviews.splice(subviews.indexOf(subview), 1);
  },
  attachSubviews: function () {
    var view = this;
    _(this.subviews()).each(function (subviews, selector) {
      var $el = view.$(selector);

      if ($el.length === 0 && view.$el.hasClass(selector.slice(1))) {
        $el = view.$el;
      }
      $el.empty();

      _(subviews).each(function (subview) {
        $el.append(subview.$el);
        subview.delegateEvents();
      });
    });
  },
  subviews: function (selector) {
    this._subviews = this._subviews || {};

    if (!selector) {
      return this._subviews;
    } else {
      this._subviews[selector] = this._subviews[selector] || [];
      return this._subviews[selector]; 
    }
  },
  delegateEvents: function () {
    Backbone.View.prototype.delegateEvents.call(this);
    _(this.subviews()).each(function (subviews) {
      _(subviews).each(function (subview) {
        subview.delegateEvents();
      });
    });
  }
});
