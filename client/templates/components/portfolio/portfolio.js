if (Meteor.isClient) {
  Template.portfolio.onCreated(function() {
  });

  Template.portfolio.onRendered(function() {
    $(document).ready(function(){
      // $('.carousel.carousel-slider').carousel({fullWidth: true, indicators: true});
      // $('.carousel').carousel({});
      // $('.materialboxed').materialbox();

      $("[data-fancybox]").fancybox({
        'buttons' : [
          'slideShow',
          'fullScreen',
          'close'
        ],
      });
    });
	});

  Template.portfolio.helpers({
    intro: function () {
      var logan_intro = "My experiences, natural ability, and personal interests have me build the perfect skill for creating effective products, maintaining team engagement, and managing business concerns while ensuring an absolute focus on user oriented design.";
      return logan_intro;
    },
    section: function () {
      var logan_portfolio = [
        {"title": "Branche (Digital Escrow Services)",
          "category": [
            {"text": "App mockup/wireframes", "class": "portfolio_app",
            "photo": ["mockup01.jpg","mockup02.jpg","mockup03.jpg","mockup04.jpg","mockup05.jpg"]},
            {"text": "UX Workflow", "class": "portfolio_ux",
            "photo": ["workflow00.jpg", "workflow01.jpg", "workflow02.jpg", "workflow03.jpg"]},
            {"text": "Presentation screens", "class": "portfolio_presentation",
            "photo": ["presentation01.jpg", "presentation02.jpg", "presentation03.jpg", "presentation04.jpg", "presentation05.jpg"]},
            {"text": "Branche Website (deactivated)", "class": "portfolio_website",
            "photo": ["website01.jpg", "website02.jpg", "website03.jpg"]},
          ]
        },
        {"title": "Wireframes and Mockups", "class": "portfolio_mockups",
          "category": [
            {"text": "Cornerstone housing for women (not yet launched)",
            "photo": ["cornerstone01.jpg", "cornerstone02.jpg", "cornerstone03.jpg"]},
            {"text": "Skyreader studio",
            "photo": ["skyreader1.png", "skyreader2.jpg", "skyreader3.jpg"]},
            {"text": "Draw along pip",
            "photo": ["pip1.jpg","pip2.png","pip3.jpg","pip4.jpg"]},
            {"text": "Wiggins goes to the Zoo (unreleased)",
            "photo": ["wiggins1.jpg","wiggins2.jpg"]},
            {"text": "Papergirls Dressup (unreleased)",
            "photo": ["papergirls01.png","papergirls02.png","papergirls03.png","papergirls04.png"]},
            {"text": "Pirates Passage (unreleased)",
            "photo": ["pirates1.png","pirates2.png","pirates3.png","pirates4.png"]},
          ]
        },
        {"title": "Illustration and concept art", "class": "portfolio_art",
          "category": [
            {"text": "Madballs in Babo Invasion",
            "photo": ["babo1.jpg","babo2.jpg","babo3.jpg","babo4.png","babo5.png",]},
            {"text": "Misc game character concept designs",
            "photo": ["character1.jpg","character2.jpg","character3.jpg"]},
            {"text": "Misc illustrations",
            "photo": ["illustrations1.jpg","illustrations2.jpg","illustrations3.jpg","illustrations4.jpg"]},
          ]
        },
      ];
      return logan_portfolio;
    },
    grouping: function (str) {
      return str.substring(0, 3);
    },
    link_section: function (section) {
      console.log(section);
      return (section.includes("Branche"));
    }
  });

  Template.portfolio.events({
    'click #button_floor0': function(event) {
      Session.set('floor', 0);
    },
  });

  Template.links.helpers({
    sub_category: function () {
      var links = [
        {"text": "Explainer video", "video": true, "link": "https://www.youtube.com/embed/oiUJqtAdmv4"},
        {"text": "Branche Blog", "video": false, "link": "https://medium.com/@branche/the-blockchain-revolution-needs-to-be-for-everyone-86479a1d645e"},
        {"text": "DES website", "video": false, "link": "https://www.digitalescrowservices.com/"},
      ];
      return links;
    }
  });
}