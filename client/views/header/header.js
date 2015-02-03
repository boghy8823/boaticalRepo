Template.header.created = function () {
  Session.set('isActive', false);
  Session.set('showLogin', false);
  Session.set('showMenu', false);
};

Template['header'].helpers({
  showLogin: function () {
    return Session.get('showLogin');
  },
  showMenu: function () {
    return Session.get('showMenu');
  },
  isActive: function () {
    return Session.get('isActive') ? 'active' : '';
  },
  animateClass: function () {
    return Session.get('isActive') ? 'fadeIn' : 'fadeOut';
  },
  iconClass: function () {
    return Meteor.user() ? 'user' : 'sign in';
  },
  animateDropdown: function() {
    return Session.get('showMenu') ? 'fadeIn' : 'fadeOut';
  }
});

Template['header'].events({
  'click .login-button' : function () {
    var showLogin = Session.get('showLogin');
    var user = Meteor.user();
    console.log("Meteor user ", user);
    console.log("Show Login ", showLogin);

    Session.set('isActive', !Session.get('isActive'));
    Session.set('showLogin', !Session.get('showLogin'));
    Session.set('showMenu', false);
  },
  'click .log-out' : function () {
    Meteor.logout();
  },
  'click .logged-user' : function () {
     Session.set('showMenu', !Session.get('showMenu'));
     console.log("Show menu");
  }
});

