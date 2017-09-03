if (Meteor.isClient) {
  Template.employment.onCreated(function() {
  });

  Template.employment.onRendered(function() {
    $(document).ready(function(){
      $('.collapsible').collapsible({});
    });
	});

  Template.employment.helpers({
    profile: function () {
      return Session.get('profile');
    },
    intro: function () {
      var simeon_intro = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit risus sed pretium facilisis.";
      var logan_intro = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit risus sed pretium facilisis.";
      if (Session.get("profile").id == "sim") {
        return simeon_intro;
      } else {
        return logan_intro;
      }
    },
    jobs: function () {
      var simeon_jobs = [
        {"title": "Development Skills", "icon": "code"},
        {"title": "Tech Skills", "icon": "computer"},
        {"title": "People Skills", "icon": "group"},
      ];

      var logan_jobs = [
        {"title": "UX/Design Skills", "icon": "color_lens"},
        {"title": "Management Skills", "icon": "assignment"},
        {"title": "People Skills", "icon": "group"},
      ];
      if (Session.get("profile").id == "sim") {
        return simeon_jobs;
      } else {
        return logan_jobs;
      }
    },
  });

  Template.employment.events({
    'click #a': function(event) {
      Session.set('floor', 0);
    },
  });
}