AppController = RouteController.extend({
  layoutTemplate: 'appLayout',
  onAfterAction: function () {
    Meta.setTitle('Application Application');
    if (Meteor.isCordova) {
    	screen.orientation.lock('portrait');
    }

  }
});

AppController.events({
  'click [data-action=logout]' : function() {
    AccountsTemplates.logout();
  }
});