FoodMeNow.Views.SignIn = Backbone.View.extend({
  template: function () {
    return this.newUser ? JST['auth/signup'] : JST['auth/signin']
  },
  initialize: function () {
    this.newUser = false;
  },
  render: function () {
    this.$el.html(this.template());
    return this;
  },
  events: {
    'click .guest-signin': 'fillSigninForm',
    'click .authorize': 'authorize',
    'click .toggleAuthType': 'toggleAuthType'
  },
  toggleAuthType: function (event) {
    event.preventDefault();
    FoodMeNow.removeModal('#checkout');
    this.newUser = !this.newUser;
    this.render();
    $('#checkout').modal('show');
  },
  fillSigninForm: function (event) {
    event.preventDefault();

    var $parents = $(event.currentTarget).parents();
    $parents.find('#email').val("guest@food-me-now.com");
    $parents.find('#password').val("guest_password");
  },
  authorize: function (event) {
    event.preventDefault();
    var view = this;

    var $form = $(event.currentTarget).parents().find('form');
    var params = $form.serializeJSON();

    FoodMeNow.currentUser.fetch({
      url: '/sessions',
      type: 'POST',
      data: params['user'],
      success: function () {
        FoodMeNow.removeModal('#checkout');
        Backbone.history.navigate('#/checkout');
        $('.dropdown .btn-group').addClass('open');
      },
      error: function (response, options) {
        var $alert = this.$('.alert');
        $alert.removeClass('hidden');
        $alert.html('Invalid email/password combination');
      }
    });
  }
});
