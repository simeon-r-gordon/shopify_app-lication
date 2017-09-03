if (Meteor.isClient) {
  Template.about.onCreated(function() {
  });

  Template.about.onRendered(function() {
    $(document).ready(function(){
      $('.collapsible').collapsible({});
    });
	});

  Template.about.helpers({
    profile: function () {
      return Session.get('profile');
    },
    intro: function () {
      var simeon_intro = "First and foremost I am a problem solver. I am also a builder and a wizard, I need to gain and share new knowledge and make things from it.";
      var logan_intro = "While a few written words can hardly convey a deep understanding of my personality, it can at least relate some basic facts about me and my motivations.";
      if (Session.get("profile").id == "sim") {
        return simeon_intro;
      } else {
        return logan_intro;
      }
    },
    sections: function () {
      var simeon_sections = [
        { "img": "market.jpg",
          "paragraphs": [
            "If you leave a puzzle in front of me, can’t help but to try and figure it out. Not only is there a great reward in figuring out the solution, I know that every problem I set my mind on leaves me better prepared for ones in the future. I constantly strive to become more efficient at solving wider varieties of problems, not just for myself but to help others around me.",
            "Living in the information age, computer science presented itself as the obvious way for me to bring all my ideas to life. It is a perfect blend of creativity, problem solving, learning and building all at once."
          ]
        },
        { "img": "locks.jpg",
          "paragraphs": [
            "I am constantly on the search for new information. New stories, facts, techniques and skills, all of them interest me equally. It is only by combining widely diverse ideas and experiences that we can come up with truly new and brilliant things. I must learn as much as possible with my time, gaining new skills and perfecting old ones.",
            "Though what good is this knowledge if kept all to myself? My own success is directly tied to that of my team, no matter the setting. Thankfully teaching is a reward in its own right, and so I love sharing what I have learned with others.",
          ]
        },
        { "img": "DES.jpg",
          "paragraphs": [
            "Even before I graduated from the University of Ottawa I became involved in a couple of projects with the up-and-coming field of Blockchain tech. Here I found a whole world of new puzzles, and practically everything I worked on was one of the first of its kind.",
            "This led to a my recent startup “Digital Escrow Services”, where I worked to provide micro-credit and financial services using Blockchain tech in a mobile application. I wanted to use the improvements in both security and accessibility these two technologies provide to change the lives of the underbanked in Canada.",
          ]
        },
        { "img": "shopify.jpg",
          "paragraphs": [
            "At Shopify, I hope to take all these lessons learned and apply them in new and better ways. I want to apply my experience towards improving financial services and enabling the entrepreneurial spirit in others.",
          ]
        },
      ];

      var logan_sections = [
        { "img": "lydia.jpg",
          "paragraphs": [
            "I believe that financial technology can make the world a better place.",
            "That sounds trite to some, and impossible to others, but the reality is that from the discovery of the touchstone 2700 years ago to the development of online shopping and cryptocurrency, economic technology has affected human development as much as the wheel, the printing press, or the steam engine."
          ]
        },
        { "img": "companies.jpg",
          "paragraphs": [
            "Like the invention of coinage or public markets or so many revolutionary ideas before, modern economic technologies like ebay, the gig economy, or shopify, help empower people to better leverage their own personal skills and resources.",
            "Not only that, but as any economist wil tell you, the most important factor in any economy is: velocity. The easier it is for everyone to buy, sell, and do business, the better the economy performs as a whole."
          ]
        },
        { "img": "DES.jpg",
          "paragraphs": [
            "After discovering blockchain technology I developed a deep interest in economic theory and financial technology. This eventually led to me focusing my efforts into my recent startup “Digital Escrow Services” where I designed and built a system to provide vastly improved micro-credit and basic financial services called “Branche”. ",
            "This experience taught me that as important as vision and skill are, they do not necessarily grant one the capacity to effectively run a business. I believe that every limitation found is an opportunity waiting to be taken advantage of. I now look forward to finding the right place to bring my experience and knowledge to bear so I can continue contributing to the ever changing face of economic growth and prosperity."
          ]
        },
        { "img": "shopify.jpg",
          "paragraphs": [
            "Working at Shopify will bring together my practical skills and experience, my passion for product design, and my love of anthropology and economic technology.",
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
  Template.about.events({
    'click #a': function(event) {
      Session.set('floor', 0);
    },
  });
}