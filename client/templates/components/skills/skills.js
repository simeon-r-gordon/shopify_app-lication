if (Meteor.isClient) {
  Template.skills.onCreated(function() {
    Session.set("selected", {
      name: "none",
      percent: 0
    });
  });

  Template.skills.onRendered(function() {
    $(document).ready(function(){
      $('.collapsible').collapsible({});
    });
	});

  Template.skills.helpers({
    skills: function () {
      var simeon_skills = [
        {"title": "Development Skills", "icon": "code"},
        {"title": "Tech Skills", "icon": "computer"},
        {"title": "People Skills", "icon": "group"},
      ];

      var logan_skills = [
        {"title": "UX/Design Skills", "icon": "color_lens"},
        {"title": "Management Skills", "icon": "assignment"},
        {"title": "People Skills", "icon": "group"},
      ];
      if (Session.get("profile").id == "sim") {
        return simeon_skills;
      } else {
        return logan_skills;
      }
    },
  });

  Template.skills.events({
    'click #button_floor0': function(event) {
      Session.set('floor', 0);
    },
  });
}