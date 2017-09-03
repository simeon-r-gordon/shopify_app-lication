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
        { "title": "Job Title", "company": "Bitheads Inc.", "img": "bithead.jpg",
          "content": {
            "dates": "month 2000 - month 2000",
            "points": [ "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "Praesent vestibulum dolor sollicitudin dolor sollicitudin, vel ullamcorper metus gravida. Quisque egestas risus ipsum, ac placerat lacus efficitur eget.",
                        "Sed volutpat ex eget volutpat pharetra. Vivamus in bibendum urna, vel suscipit metus."
                      ]
          }
        },
        { "title": "Job Title", "company": "Bitheads Inc.", "img": "bithead.jpg",
          "content": {
            "dates": "month 2000 - month 2000",
            "points": [ "Fusce egestas orci elit, sed ultricies nunc sollicitudin vel. Nunc et eleifend lacus, at molestie augue.",
                        "Vestibulum sed pellentesque felis. Curabitur eu est scelerisque, laoreet neque quis, vestibulum velit.",
                        "Vestibulum sed pellentesque felis. Curabitur eu est scelerisque, laoreet neque quis, vestibulum velit.",
                        "Nullam felis metus, fermentum eu ex eget, ornare lacinia metus. Fusce ullamcorper erat et turpis finibus, nec rhoncus quam viverra."
                      ]
          }
        },
        { "title": "Job Title", "company": "Bitheads Inc.", "img": "bithead.jpg",
          "content": {
            "dates": "month 2000 - month 2000",
            "points": [ "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "Vestibulum sed pellentesque felis. Curabitur eu est scelerisque, laoreet neque quis, vestibulum velit.",
                        "Donec mauris massa, ullamcorper nec eros sit amet, tristique viverra neque."
                      ]
          }
        },
      ];

      var logan_jobs = [
        { "title": "Job Title", "company": "Bitheads Inc.", "img": "bithead.jpg",
          "content": {
            "dates": "month 2000 - month 2000",
            "points": [ "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "Praesent vestibulum dolor sollicitudin dolor sollicitudin, vel ullamcorper metus gravida. Quisque egestas risus ipsum, ac placerat lacus efficitur eget.",
                        "Sed volutpat ex eget volutpat pharetra. Vivamus in bibendum urna, vel suscipit metus."
                      ]
          }
        },
        { "title": "Job Title", "company": "Bitheads Inc.", "img": "bithead.jpg",
          "content": {
            "dates": "month 2000 - month 2000",
            "points": [ "Fusce egestas orci elit, sed ultricies nunc sollicitudin vel. Nunc et eleifend lacus, at molestie augue.",
                        "Vestibulum sed pellentesque felis. Curabitur eu est scelerisque, laoreet neque quis, vestibulum velit.",
                        "Vestibulum sed pellentesque felis. Curabitur eu est scelerisque, laoreet neque quis, vestibulum velit.",
                        "Nullam felis metus, fermentum eu ex eget, ornare lacinia metus. Fusce ullamcorper erat et turpis finibus, nec rhoncus quam viverra."
                      ]
          }
        },
        { "title": "Job Title", "company": "Bitheads Inc.", "img": "bithead.jpg",
          "content": {
            "dates": "month 2000 - month 2000",
            "points": [ "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "Vestibulum sed pellentesque felis. Curabitur eu est scelerisque, laoreet neque quis, vestibulum velit.",
                        "Donec mauris massa, ullamcorper nec eros sit amet, tristique viverra neque."
                      ]
          }
        },
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