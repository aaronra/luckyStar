
Meteor.publish('projects', function (/* args */) {
  return Projects.find();
});