Router.route('/', {
  name: 'home',
  layoutTemplate: 'publicLayout'
});

Router.route('/dashboard', {
  name: 'dashboard'
});

Router.route('/PO-Input', {
  name: 'PoInput'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});
