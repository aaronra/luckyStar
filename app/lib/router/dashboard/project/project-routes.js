/**
 * Created by gilbertor on 3/22/16.
 */


Router.route('/dashboard/projects', {
  name: 'dashboard.projects',
  where: 'client',
  controller:'ProjectController',
  action:'listProjects'
});

Router.route('/dashboard/projects/add', {
  name: 'dashboard.projects.add',
  where: 'client',
  controller:'ProjectController',
  action:'AddProject'
});
