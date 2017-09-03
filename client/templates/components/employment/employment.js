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
        { "title": "CTO, Lead Developer", "company": "Digital Escrow Services", "img": "bithead.png",
          "content": {
            "dates": "Sept 2015 - Aug 2017",
            "points": [
              "Responsible for implementation, and management of all code and infrastructure for a small tech startup.",
              "Developed a mobile application from scratch using a JS stack and Meteor, also produced and maintained several websites.",
              "Responsible for the entire lifecycle of mobile and web-app development from conception and design to deployment and maintainance.",
            ]
          }
        },
        { "title": "Developer", "company": "CNW-Mediavantage", "img": "bithead.png",
          "content": {
            "dates": "Sept 2011 - Dec 2015",
            "points": [
              "Responsible for code architecture and development and deployment.",
              "Actively participated in an agile team eventually progressing to limited leadership roles.",
              "Progressed from Co-op student all the way to full team member over 8 months.",
              "Responsible for maintaining the entire version control, CBI, and deployment systems.",
              "Heavily involved in several enterprise-level development projects including a migration to Elasticsearch/Hadoop/Samza, several OS upgrades, and integrating the Twitter feed to our product.",
              "Part of a team of two responsible for new uOttawa co-op students. This included the hiring process, onboarding and training, professional development, review, and assisting with final reports.",
            ]
          }
        },
        { "title": "Game developer / security expert", "company": "Carleton University", "img": "bithead.png",
          "content": {
            "dates": "Jan - Jul 2011",
            "points": [
              "6-month co-op term for the Carleton Human Computer Interaction lab developing a game to teach youth about fundamental security practices.",
              "Developed in PHP, python, and Flash-Actionscript.",
              "Assisted professors and graduate students in the gamification of their research findings.",
              "Responsible for graphic and game design, code architecture, and necessary infrastructure.",
            ]
          }
        },
      ];

      var logan_jobs = [
        { "title": "Job Title", "company": "Bitheads Inc.", "img": "bithead.png",
          "content": {
            "dates": "month 2000 - month 2000",
            "points": [ "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "Praesent vestibulum dolor sollicitudin dolor sollicitudin, vel ullamcorper metus gravida. Quisque egestas risus ipsum, ac placerat lacus efficitur eget.",
                        "Sed volutpat ex eget volutpat pharetra. Vivamus in bibendum urna, vel suscipit metus."
                      ]
          }
        },
        { "title": "Job Title", "company": "Bitheads Inc.", "img": "bithead.png",
          "content": {
            "dates": "month 2000 - month 2000",
            "points": [ "Fusce egestas orci elit, sed ultricies nunc sollicitudin vel. Nunc et eleifend lacus, at molestie augue.",
                        "Vestibulum sed pellentesque felis. Curabitur eu est scelerisque, laoreet neque quis, vestibulum velit.",
                        "Vestibulum sed pellentesque felis. Curabitur eu est scelerisque, laoreet neque quis, vestibulum velit.",
                        "Nullam felis metus, fermentum eu ex eget, ornare lacinia metus. Fusce ullamcorper erat et turpis finibus, nec rhoncus quam viverra."
                      ]
          }
        },
        { "title": "Job Title", "company": "Bitheads Inc.", "img": "bithead.png",
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