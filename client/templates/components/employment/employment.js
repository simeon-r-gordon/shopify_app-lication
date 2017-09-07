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
    intro: function () {
      var simeon_intro = "Though my career path is still quite a short one, I have had the pleasure of working on cutting edge development projects everywhere I've been.";
      var logan_intro = "The list below describes the varied and intriguing path my career has taken. From animation to app design to founding a blockchain startup, I have always chosen a direction that would challenge me and give me the greatest oportunity to learn.";
      if (Session.get("profile").id == "sim") {
        return simeon_intro;
      } else {
        return logan_intro;
      }
    },
    jobs: function () {
      var simeon_jobs = [
        { "title": "Founder/CTO/Lead Developer", "company": "Digital Escrow Services", "img": "DES.png",
          "content": {
            "dates": "sep 2015 - aug 2017",
            "points": [
              "Founder, Secretary, and CTO of this company dedicated to making blockchain technology accessible to everyone.",
              "Responsible for the management of all code and tech infrastructure for a small tech startup.",
              "Responsible for the entire lifecycle of mobile and web-app development from conception, to deployment and maintainance.",
            ]
          }
        },
        { "title": "Developer", "company": "CNW-Mediavantage", "img": "CNW.png",
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
        { "title": "Game developer / security expert", "company": "Carleton University", "img": "carleton.png",
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
        { "title": "Founder/COO/Product Manager ", "company": "Digital Escrow Services Inc.", "img": "DES.png",
          "content": {
            "dates": "sep 2015 – aug 2017",
            "points": [
              "Designer and manager of 'Branche', a financial services platform for the underbanked built on blockchain technology and leveraging the gig economy.",
              "Created business model canvases, personas, user stories, workflows, wireframes, mockups and final assets.",
              "Designed and created all marketing and business creative content including presentations, workshops, websites, and an animated explainer video."
            ]
          }
        },
        { "title": "Creative Strategy Consultant", "company": "LS Consulting", "img": "LSconsulting.png",
          "content": {
            "dates": "feb 2013 – sep 2015",
            "points": [
              "Provided product management, planning, and creative services to a variety of small and medium-sized businesses, ranging from book publishers to production companies to tech startups.",
            ]
          }
        },
        { "title": "Art Director/Product Manager", "company": "Skyreader Media Inc.", "img": "skyreader.png",
          "content": {
            "dates": "nov 2011 – aug 2012",
            "points": [
              "Product designer/UX designer and art director of top selling interactive ebook apps for children, including 'Draw Along Pip'.",
              "Created UX designs and worked with a multi-discipline team to develop an interactive ebook creation tool 'Skyreader Studio'.",
            ]
          }
        },
        { "title": "Technical Coordinator/Interactive Designer", "company": "Mercury Active Inc. (Mercury Filmworks Inc.)", "img": "mercury.png",
          "content": {
            "dates": "jan 2011 – nov 2011",
            "points": [
              "Modelled and staffed the creation of Mercury Filmworks' interactive division.",
              "Started and managed daily operations of Mercury Filmworks’ interactive division, and created designs for ios apps.",
            ]
          }
        },
        { "title": "Product Designer", "company": "Big Hats Entertainment", "img": "bighat.png",
          "content": {
            "dates": "oct 2009 – nov 2010",
            "points": [
              "Created concepts, prototypes, and animated mock-ups for youth oriented iphone apps.",
              "Created assets for 'Papergirls', a dress-up app for tween girls using photographs of real models and clothing.",
            ]
          }
        },
        { "title": "Designer/Team Lead", "company": "bitHeads Inc.", "img": "bitheads.png",
          "content": {
            "dates": "nov 2006 – sep 2009",
            "points": [
              "Led an interdisciplinary team to create several online flash based games.",
              "Assisted the Software Development Manager with product design and implementation.",
              "Created concept art as well as 3D and 2D assets for “Madballs in Babo: Invasion” on Xbox Live.",
              "Designed concepts and created mockup’s for casual games intended for Xbox Live and Steam.",
            ]
          }
        },
        { "title": "Animator/Senior Animator", "company": "Pip Animation Services", "img": "pip.png",
          "content": {
            "dates": "2001 – 2003 and 2005 - 2006",
            "points": [
              "Created character animation for several animated children's programs broadcast around the world.",
              "Consistently surpassed quantity and quality expectations and aided in style guide and stock footage creation.",
            ]
          }
        },
        { "title": "Animator/Senior Animator", "company": "Mercury Filmworks Inc.", "img": "mercury.png",
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