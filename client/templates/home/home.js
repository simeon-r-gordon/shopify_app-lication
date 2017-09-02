if (Meteor.isClient) {
  Template.home.onCreated(function() {
    Session.set("selected", {
      name: "none",
      percent: 0
    });
  });

  Template.home.onRendered(function() {
	});

  Template.home.helpers({
    profile: function () {
      return Session.get('profile');
    },
  });

  Template.home.events({
    'click #button_floor0': function(event) {
      Session.set('floor', 0);
    },
  });
}