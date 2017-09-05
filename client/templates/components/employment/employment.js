if (Meteor.isClient) {
  Template.employment.onCreated(function() {
  });

  Template.employment.onRendered(function() {
    $(document).ready(function(){
      $('.collapsible').collapsible({});
      $(this).scrollTop(0);
    });
	});

  Template.employment.helpers({
    profile: function () {
      return Session.get('profile');
    },
    intro: function () {
      var simeon_intro = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit risus sed pretium facilisis.";
      var logan_intro = "The list below describes the varied and intriguing path my career has taken.From animation to app design to founding a blockchain startup, I have always chosen a direction that would challenge me and give me the greatest oportunity to learn.";
      if (Session.get("profile").id == "sim") {
        return simeon_intro;
      } else {
        return logan_intro;
      }
    },
    jobs: function () {
      var simeon_jobs = [
        { "title": "Founder/CTO/Lead Developer", "company": "Digital Escrow Services", "img": "bithead.png",
          "content": {
            "dates": "sep 2015 - aug 2017",
            "points": [
              "Founder, Secretary, and CTO of this company dedicated to making blockchain technology accessible to everyone.",
              "Responsible for the management of all code and tech infrastructure for a small tech startup.",
              "Responsible for the entire lifecycle of mobile and web-app development from conception, to deployment and maintainance.",
            ]
          }
        },
        { "title": "Developer", "company": "CNW-Mediavantage", "img": "bithead.png",
          "content": {
            "dates": "sep 2011 - dec 2015",
            "points": [
              "Responsible for code architecture, development and deployment.",
              "Actively participated in an agile team progressing to limited leadership roles.",
              "Progressed from Co-op student all the way to full team member over 8 months.",
              "Responsible for maintaining the entire version control, CBI, and deployment systems.",
              "Critical to several enterprise-level development projects including a migration to Elasticsearch/Hadoop/Samza, several OS upgrades, and integrating the Twitter feed to our product.",
              "Part of a team of two responsible for new uOttawa co-op students. This included the hiring process, onboarding and training, professional development, review, and assisting with final reports.",
            ]
          }
        },
        { "title": "Game developer / security expert", "company": "Carleton University", "img": "bithead.png",
          "content": {
            "dates": "jan - jul 2011",
            "points": [
              "6-month co-op term for the Carleton Human Computer Interaction lab developing a game to teach youth about fundamental security practices.",
              "Developed in PHP, python, and Flash-Actionscript.",
              "Assisted professors and graduate students in the gamification of their research findings.",
              "Responsible for graphic and game design, code architecture, and managing tech infrastructure.",
            ]
          }
        },
      ];

      var logan_jobs = [
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
        { "title": "Creative Strategy Consultant", "company": "LS Consulting", "img": "bithead.png",
          "content": {
            "dates": "feb 2013 – sep 2015",
            "points": [
              "Provided product management, planning, and creative services to a variety of small and medium-sized businesses, ranging from book publishers to production companies to tech startups.",
            ]
          }
        },
        { "title": "Art Director/Product Manager", "company": "Skyreader Media Inc.", "img": "bithead.png",
          "content": {
            "dates": "nov 2011 – aug 2012",
            "points": [
              "Lead designer/UX designer and art director of top selling children's entertainment apps and authoring tools.",
              "Created UX designs and worked a multi-discipline team to develop an interactive ebook creation tool.",
            ]
          }
        },
        { "title": "Technical Coordinator/Interactive Designer", "company": "Mercury Active Inc. (Mercury Filmworks Inc.)", "img": "bithead.png",
          "content": {
            "dates": "jan 2011 – nov 2011",
            "points": [
              "Modelled and staffed the creation of Mercury Filmworks' interactive division.",
              "Started and managed daily operations of Mercury Filmworks’ interactive division, and created designs for ios apps.",
            ]
          }
        },
        { "title": "Designer/Team Lead", "company": "bitHeads Inc.", "img": "bithead.png",
          "content": {
            "dates": "nov 2006 – sep 2009",
            "points": [
              "Created concept art, UX, mockups, and designs for casual games intended for Xbox Live and Stream markets.",
              "Designed and created game templates and documentation for a flash based game development SDK.",
            ]
          }
        },
        { "title": "Animator/Senior Animator", "company": "Pip Animation Services", "img": "bithead.png",
          "content": {
            "dates": "2001 – 2003 and 2005 - 2006",
            "points": [
              "Created character animation for several animated children's programs broadcast around the world.",
              "Vestibulum",
              "Donec."
            ]
          }
        },
        { "title": "Animator/Senior Animator", "company": "Mercury Filmworks Inc.", "img": "bithead.png",
          "content": {
            "dates": "2003 – 2005",
            "points": [
              "Created character animation for several animated children's programs broadcast around the world.",
              "Consistently surpassed quantity and quality expectations and aided in style guide and stock footage creation.",
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