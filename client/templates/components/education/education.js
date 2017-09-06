if (Meteor.isClient) {
  Template.education.onCreated(function() {
  });

  Template.education.onRendered(function() {
    $(document).ready(function(){
      $('.collapsible').collapsible({});
      $(this).scrollTop(0);
    });
  });

  Template.education.helpers({
    profile: function () {
      return Session.get('profile');
    },
    intro: function () {
      var simeon_intro = "Having been homeschooled up until grade 9, I was encouraged to choose a program that was both employable and enjoyable.";
      var logan_intro = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit risus sed pretium facilisis.";
      if (Session.get("profile").id == "sim") {
        return simeon_intro;
      } else {
        return logan_intro;
      }
    },
    school: function () {
      var simeon_school = [
        { "title": "BSc Computer Science, Minor in Celtic Studies", "company": "University of Ottawa", "img": "uOttawa.png",
          "content": {
            "dates": "sep 2009 - dec 2014",
            "points": [
              "Completed honors co-op program cum laude.",
              "Recieved an 'exceeds expectations' commendation on 4/4 co-op terms.",
              "Leader and organizer of  many social events for the  Celtic Student Society.",
              "Volunteer tutor at the SITE Student Success Centre.",
            ]
          }
        },
      ];

      var logan_school = [
        { "title": "Founder/COO/Product Manager ", "company": "Digital Escrow Services Inc.", "img": "bithead.png",
          "content": {
            "dates": "sep 2015 – aug 2017",
            "points": [
              "Founder, Vice-President, and COO of this company dedicated to making blockchain technology accessible to everyone.",
              "Product designer and manager of “Branche,” a user-friendly consumer financial services platform.",
              "Designed and created all multimedia content including websites, mockups, explainer videos, UX, and marketing material."
            ]
          }
        },
      ];

      if (Session.get("profile").id == "sim") {
        return simeon_school;
      } else {
        return logan_school;
      }
    },
  });

  Template.education.events({
    'click #a': function(event) {
      Session.set('floor', 0);
    },
  });
}