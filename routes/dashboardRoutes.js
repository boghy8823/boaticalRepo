Router.route('/dashboard', function () {
  this.render('dashboard');
  SEO.set({ title: 'Dashboard - ' + Meteor.App.NAME });
});

