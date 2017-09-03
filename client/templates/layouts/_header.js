if (Meteor.isClient) {
	Template._header.onCreated(function() {
    // Profile definitions
    var simeon = {
      "id": "sim",
      "name": {"first": "Simeon", "last": "Gordon"},
      "address": {"street": "1512-1375 Prince of Wales Ave.", "area": "Ottawa, Ontario", "zip": "K2C 3L5"},
      "email": "simeon.r.gordon@gmail.com",
      "phone": "613-407-3789",
      "li_url": "https://www.linkedin.com/in/simeon-gordon-7530a598/",
    }
    var logan = {
      "id": "log",
      "name": {"first": "Logan", "last": "Schinbeckler"},
      "address": {"street": "1512-1375 Prince of Wales Ave.", "area": "Ottawa, Ontario", "zip": "K2C 3L5"},
      "email": "L.Schinbeckler@gmail.com",
      "phone": "613-883-9398",
      "li_url": "https://www.linkedin.com/in/loganschinbeckler/",
    }
    Session.set('simeon', simeon);
    Session.set('logan', logan);

    Session.set('profile', simeon);
	});

  Template._header.onRendered(function() {
    $(document).ready(function(){
      $('.collapsible').collapsible({  edge: 'right', closeOnClick: true  });
      $(".button-collapse").sideNav({ edge: 'right', closeOnClick: true });
      $(".services").sideNav({ edge: 'right', closeOnClick: true });
      $(".dropdown-button").dropdown();
    });
  });

  Template._header.helpers({
    profile: function () {
      return Session.get('profile');
    },
    email_content: function () {
      return "?subject=Shopify%20Job%20App-lication";
    },
  });

	Template._header.events({
		'click a[target=_blank]': function (event) {
	    console.log(event.target.href);
	  },
    'click #back': function (event) {
      Router.go('/');
    },
    'click #app': function (event) {
      if (Session.get("profile").id == "sim") {
        Session.set("profile", Session.get("logan"));
      } else {
        Session.set("profile", Session.get("simeon"));
      }
    },
	});

	Template._footer.events({
    'click #graphic': function(event) {
    }
  });
}

/***** © 2016 Simeon Gordon and Digital Escrow Services - all rights reserved *****/