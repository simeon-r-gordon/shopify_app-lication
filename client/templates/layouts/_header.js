if (Meteor.isClient) {
	Template._header.onRendered(function() {

    // Profile definitions
    var simeon = {
      "id": "sim",
      "name": {"first": "Simeon", "last": "Gordon"},
      "address": {"street": "1512-1375 Prince of Wales Ave.", "area": "Ottawa, Ontario", "zip": "K2C 3L5"},
      "rating": 5,
      "phone": "613-407-3789",
    }
    var logan = {
      "id": "log",
      "name": {"first": "Logan", "last": "Schinbeckler"},
      "address": {"street": "1512-1375 Prince of Wales Ave.", "area": "Ottawa, Ontario", "zip": "K2C 3L5"},
      "rating": 4,
      "phone": "613-883-9398",
    }
    Session.set('simeon', simeon);
    Session.set('logan', logan);

    Session.set('profile', simeon);

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
  });

	Template._header.events({
		'click a[target=_blank]': function (event) {
	    console.log(event.target.href);
	  },
	});

	Template._footer.events({
    'click #graphic': function(event) {
    }
  });
}

/***** © 2016 Simeon Gordon and Digital Escrow Services - all rights reserved *****/