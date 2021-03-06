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
    'click .guest-signin': 'guestSignIn',
    'click .authorize': 'authorize',
    'click .toggleAuthType': 'toggleAuthType',
    'hidden.bs.modal #checkout': 'removeAlert'
  },
  toggleAuthType: function (event) {
    event.preventDefault();
    FoodMeNow.removeModal('#checkout');
    this.newUser = !this.newUser;
    this.render();
    $('#checkout').modal('show');
  },
  guestSignIn: function (event) {
    event.preventDefault();

    var $parents = $(event.currentTarget).parents();
    $parents.find('#email').val("guest@food-me-now.com");
    $parents.find('#password').val("guest_password");

    this.authorize(event);
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
  },
  removeAlert: function (event) {
    $target = $(event.currentTarget).find('.alert');
    $target.empty();
    $target.hide();
  }
});
