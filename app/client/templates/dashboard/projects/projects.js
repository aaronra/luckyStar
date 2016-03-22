/*****************************************************************************/
/* Projects: Event Handlers */
/*****************************************************************************/
Template.Projects.events({
});

/*****************************************************************************/
/* Projects: Helpers */
/*****************************************************************************/
Template.Projects.helpers({
  projectList:function(){
    return Projects.find().fetch();
  }
});

/*****************************************************************************/
/* Projects: Lifecycle Hooks */
/*****************************************************************************/
Template.Projects.created = function () {
};

Template.Projects.rendered = function () {
};

Template.Projects.destroyed = function () {
};
