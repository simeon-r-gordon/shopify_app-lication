if (Meteor.isClient) {
  Template.home.onCreated(function() {
    Session.set("selected", {
      name: "none",
      percent: 0
    });
  });

  Template.home.onRendered(function() {
    //random number between 0-3 every time we render the homepage
    var number = Math.floor(Math.random() * (4));
    Session.set('rando', number);
	});

  Template.home.helpers({
    profile: function () {
      return Session.get('profile');
    },
    random_img: function () {
      var src = ["locks.jpg", "civ.jpg", "market.jpg", "tower.jpg"];

      return "/images/"+src[Session.get('rando')];
    },
    job: function () {
      var simeon = {"title": "Android Developer", "link": "/"};
      var logan = {"title": "Sr. Product Designer", "link": "/"};

      if (Session.get("profile").id == "sim") {
        return simeon;
      } else {
        return logan;
      }
    },
  });

  Template.home.events({
    'click #button_floor0': function(event) {
      Session.set('floor', 0);
    },
  });
}