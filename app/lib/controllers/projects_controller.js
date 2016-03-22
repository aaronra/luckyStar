ProjectController = RouteController.extend({
  layoutTemplate: 'appLayout',
  waitOn: function () {
    return this.subscribe('items'),
      this.subscribe('projects');
  },

  data: function () {
    return Items.find({}),
      Projects.find();
  },

  listProjects: function () {
    this.render('Projects', {/* data: {} */});
  },
  AddProject: function () {
    this.render('ProjectsInsert', {});
  }
});
