if (Meteor.isClient) {
  Template.interests.onCreated(function() {
  });

  Template.interests.onRendered(function() {
    $(document).ready(function(){
      $('.collapsible').collapsible({});
      $(this).scrollTop(0);

       $("[data-fancybox]").fancybox({
        'buttons' : [
          'slideShow',
          'fullScreen',
          'close'
        ],
      });
    });
	});

  Template.interests.helpers({
    profile: function () {
      return Session.get('profile');
    },
    intro: function () {
      var simeon_intro = "I believe it is important to keep up a variety of activities in order to maintain balance and keep learning and improving myself.";
      var logan_intro = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit risus sed pretium facilisis.";
      if (Session.get("profile").id == "sim") {
        return simeon_intro;
      } else {
        return logan_intro;
      }
    },
    sections: function () {
      var simeon_sections = [
        { "img": "library.jpg",
          "paragraphs": [
            "I am a Gaelic bard at heart, and have always been enamoured with ancient myth and legend. This culminated during my time at Carleton University, when I took a minor in Celtic studies. I was able to learn in depth about Celtic, Nordic, and some Roman history. It is said “those who do not know their history are doomed to repeat it” and I have taken that to heart. ",
            "Part of what led me to this career path was an early interest spy movies and the codes they would use. I am interested not only in the practical aspects of cryptology, but everything to do with security. The human behavior; the wild history of cyphers and encryption algorithms during the world wars; keeping up with social and technological advances; even what the future holds with quantum computing.",
          ]
        },
        { "img": "amtgard.jpg",
          "paragraphs": [
            "LARP stands for Live Action Role Play. This is an umbrella term for dozens of games that vary from something like D&D in a park, to medieval combat sports.",
            "Having never been very interested in team sports, but enjoying being active, my brother and I help found the Ottawa chapter of Amtgard after our family moved to Ottawa in 2008.  Almost a decade of medieval combat later I still regularly attend Sunday field and I am well known as a champion of great-weapons, archery, and craftsman of safety weapons.",
            "I believe a keen mind requires a fit body, so in addition to LARPing, I make sure to work out at the gym on a regular basis. In doing so, I have found a lot of interest in studying human body mechanics and nutrition."
          ]
        },
        { "img": "brushes.jpg",
          "paragraphs": [
            "I believe everyone needs at least one creative outlet in order to thrive. Part of the fun, for me, is finding new mediums to exercise my creativity and mastering the skills needed to produce a new craft. I particularly enjoy painting; watercolours and miniature painting. ",
            "A huge part of LARPing is crafting your weapons, armor, clothes, and many other accessories that bring flavor and depth to the games. In wanting to be the most well-rounded geek posible, I have learned leathercraft, sewing, foamcraft and many other cosplay related skills.",
            "With a pile of painted miniatures, an obsession with storytelling, and nerdy friends, the logical thing to do is run tabletop RPGs. From Dungeons & Dragons to Shadowrun, the task of world building and running a game is the complete set of my skills and interest brought together. Running a game allows me to re-write my favorite legends, create entire worlds and civilizations from scratch, and invent new puzzles and riddles for my friends to solve. Not to mention all the fun arts and crafts it takes to make the maps and minis.",
          ]
        },
      ];

      var logan_sections = [
        { "img": "market.jpg",
          "paragraphs": [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Praesent vestibulum dolor sollicitudin dolor sollicitudin, vel ullamcorper metus gravida. Quisque egestas risus ipsum, ac placerat lacus efficitur eget.",
            "Sed volutpat ex eget volutpat pharetra. Vivamus in bibendum urna, vel suscipit metus."
          ]
        },
        { "img": "locks.jpg",
          "paragraphs": [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Praesent vestibulum dolor sollicitudin dolor sollicitudin, vel ullamcorper metus gravida. Quisque egestas risus ipsum, ac placerat lacus efficitur eget.",
            "Sed volutpat ex eget volutpat pharetra. Vivamus in bibendum urna, vel suscipit metus."
          ]
        },
      ];
      if (Session.get("profile").id == "sim") {
        return simeon_sections;
      } else {
        return logan_sections;
      }
    }
  });
  Template.interests.events({
    'click #a': function(event) {
    },
  });
}