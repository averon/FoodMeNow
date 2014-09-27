FoodMeNow.Views.SignIn = Backbone.View.extend({
  template: JST['checkout/signin'],
  render: function () {
    this.$el.html(this.template());
    return this;
  },
  events: {
    'click .guest-signin': 'fillSigninForm',
    'click .signin': 'signin'
  },
  fillSigninForm: function(event) {
    event.preventDefault();

    var $parents = $(event.currentTarget).parents();
    $parents.find('#email').val("guest@food-me-now.com");
    $parents.find('#password').val("guest_password");
  },
  signin: function (event) {
    event.preventDefault();

    var $form = $(event.currentTarget).parents().find('form');
    var params = $form.serializeJSON();
    var session = new FoodMeNow.Models.Session(params['user']);
    session.save({}, {
      success: function (response, options) {
        FoodMeNow.currentUser = response.attributes;
        $('.modal-open').removeClass();
        $('.modal-backdrop').remove();
        Backbone.history.navigate('#/checkout');
      },
      error: function (response, options) {
        var $alert = this.$('.alert');
        $alert.removeClass('hidden');
        $alert.html('Invalid email/password combination');
      }
    });
  },
});
