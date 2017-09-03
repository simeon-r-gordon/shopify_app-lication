if (Meteor.isClient) {
  Template.interests.onCreated(function() {
  });

  Template.interests.onRendered(function() {
    $(document).ready(function(){
      $('.collapsible').collapsible({});
    });
	});

  Template.interests.helpers({
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
    sections: function () {
      var simeon_sections = [
        { "img": "market.jpg",
          "paragraphs": [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Praesent vestibulum dolor sollicitudin dolor sollicitudin, vel ullamcorper metus gravida. Quisque egestas risus ipsum, ac placerat lacus efficitur eget.",
            "Sed volutpat ex eget volutpat pharetra. Vivamus in bibendum urna, vel suscipit metus."
          ]
        },
        { "img": "locks.jpg",
          "paragraphs": [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Praesent vestibulum dolor sollicitudin dolor sollicitudin, vel ullamcorper metus gravida. Quisque egestas risus ipsum, ac placerat lacus efficitur eget.",
            "Sed volutpat ex eget volutpat pharetra. Vivamus in bibendum urna, vel suscipit metus."
          ]
        },
      ];

      var logan_sections = [
        { "img": "market.jpg",
          "paragraphs": [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Praesent vestibulum dolor sollicitudin dolor sollicitudin, vel ullamcorper metus gravida. Quisque egestas risus ipsum, ac placerat lacus efficitur eget.",
            "Sed volutpat ex eget volutpat pharetra. Vivamus in bibendum urna, vel suscipit metus."
          ]
        },
        { "img": "locks.jpg",
          "paragraphs": [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Praesent vestibulum dolor sollicitudin dolor sollicitudin, vel ullamcorper metus gravida. Quisque egestas risus ipsum, ac placerat lacus efficitur eget.",
            "Sed volutpat ex eget volutpat pharetra. Vivamus in bibendum urna, vel suscipit metus."
          ]
        },
      ];
      if (Session.get("profile").id == "sim") {
        return simeon_sections;
      } else {
        return logan_sections;
      }
    }
  });
  Template.interests.events({
    'click #a': function(event) {
    },
  });
}