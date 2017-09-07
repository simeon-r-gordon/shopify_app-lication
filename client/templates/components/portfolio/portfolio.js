if (Meteor.isClient) {
  Template.portfolio.onCreated(function() {
  });

  Template.portfolio.onRendered(function() {
    $(document).ready(function(){
      $('.collapsible').collapsible({});
      $(this).scrollTop(0);

      $("[data-fancybox]").fancybox({});
    });
	});

  Template.portfolio.helpers({
    profile: function () {
      return Session.get('profile');
    },
    intro: function () {
      var logan_intro = "My experiences, natural ability, and personal interests have me build the perfect skill for creating effective products, maintaining team engagement, and managing business concerns while ensuring an absolute focus on user oriented design.";
      return logan_intro;
    },
    section: function () {
      var logan_portfolio = []
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
}