window.FoodMeNow = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () { 
    new FoodMeNow.Routers.FoodMeNowRouter({
      $rootEl: $('#main')
    });
    Backbone.history.start();
  }
}

$(document).ready(function () { 
  FoodMeNow.initialize()
});

Backbone.CompositeView = Backbone.View.extend({
  addSubview: function (selector, view) {
    this.subviews(selector).push(view);
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
  }
});
