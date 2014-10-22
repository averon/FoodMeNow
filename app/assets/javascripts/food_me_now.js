window.FoodMeNow = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () { 
    this.defineGlobals();
    this.router = new FoodMeNow.Routers.FoodMeNowRouter({
      $rootEl: $('#main'),
    });
    Backbone.history.start();
    this.createNavbar();
    this.addModal();
    this.getCurrentUser();
  },
  createNavbar: function () {
    var currentCart = new FoodMeNow.Views.OrderShow({
      model: FoodMeNow.currentOrder
    });
    navbar = new FoodMeNow.Views.Navbar({
      model: currentCart 
    });
    $('#fmn-navbar').html(navbar.render().$el);
  },
  addModal: function () {
    var signInModal = new FoodMeNow.Views.SignIn();
    $('#signin-modal').html(signInModal.render().$el);
  },
  removeModal: function (selector) {
    $(selector).modal('hide');
    $('.modal-open').removeClass();
    $('.modal-backdrop').remove();
  },
  defineGlobals: function () {
    FoodMeNow.currentUser = new FoodMeNow.Models.User();
    FoodMeNow.currentOrder = new FoodMeNow.Models.Order();
  },
  getCurrentUser: function () {
    $.ajax('/current_user', {
      type: 'GET',
      success: function (response) {
        FoodMeNow.currentUser.save(response);
      }
    });
  }
}

$(document).ready(function () { 
  FoodMeNow.initialize();
});

Backbone.CompositeView = Backbone.View.extend({
  addSubview: function (selector, view) {
    this.subviews(selector).unshift(view);
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
  removeAllSubviews: function (selector) {
    this.subviews(selector).forEach(function (subview) {
      subview.remove();
    });
    this.subviews()[selector] = [];
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
