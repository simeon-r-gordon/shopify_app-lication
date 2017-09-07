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
      var logan_intro = "I have always been a nerd. Even when I went into animation after high school, my other options were physics, engineering and philosophy. I am naturally drawn towards new knowledge and experiences that will help me understand humanity and the world, and new opportunities that will allow me to use my knowledge and experience to make a positive impact on the world.";
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
        { "img": "museum.jpg",
          "paragraphs": [
            "A general knowledge of history can help provide us with a greater appreciation for what we have today and an understanding of patterns in human behavior over time. Certain aspects of history and anthropology, like etymology, can just be interesting or entertaining, but understanding how other groups of people dealt with certain problems can provide an interesting perspective on modern issues and help us to think outside the box when discovering solutions.",
            "Where history and anthropology might help to explain the “what” of human behavior, psychology and evolutionary biology might help to explain the “why” of that behavior. Though often far more subjective and esoteric than something like archaeology, the study of human thoughts and feelings has led to many useful pieces of understanding. From the Pareto principle to Jungian archetypes to the little Albert experiment, even a superficial study of psychology, cognitive science, and human behavior can shed incredibly interesting and useful insights into human thought and behavior",
          ]
        },
        { "img": "babylon5.jpg",
          "paragraphs": [
            "Not surprisingly, my personal time is filled with nerdy pursuits. I enjoy Game of Thrones and british comedy, and some geeky cliches like Star Trek and Babylon 5, but when I’m not working on some sort of personal project or spending time with friends, I’m typically reading a random scientific article or watching a documentary. One of my favorite TV shows is a series that is nearly 40 years old called “Connections” that covers the history of invention and technology.",
          ]
        },
        { "img": "afn.jpg",
          "paragraphs": [
            "Since my discovery of blockchain technology in 2013, I’ve become particularly interested in the power and potential of financial technology in general and blockchain technology in general. Having spent the past 2 years working with the technology, I decided to devote some of my personal time and energy to bringing the benefits of this new fintech paradigm to those people who it could benefit most. ",
            "To this end I volunteer my time and experience to two groups in particular:",
            "Cornerstone Housing for Women: \nFor the past several months I have been working with Cornerstone Housing for Women to design and implement a blockchain fundraising portal for their new building on Princeton Avenue in Ottawa. The campaign will be launched in the fall of 2017.",
            "Project Touchstone: \nA small informal group of First Nations and non First Nations individuals and business owners from across Ontario, working to conceive and develop tools and systems to provide improved financial services and opportunities to First Nations people living on reserves across Canada.",
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