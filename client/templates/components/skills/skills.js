if (Meteor.isClient) {
  Template.skills.onCreated(function() {
    Session.set("selected", {
      name: "none",
      percent: 0
    });
  });

  Template.skills.onRendered(function() {
    $(document).ready(function(){
      $('.collapsible').collapsible({});
      $(this).scrollTop(0);
    });
	});

  Template.skills.helpers({
    intro: function () {
      var simeon_intro = "My unique experiences, aptitudes, interests, and inquisitive nature have led me to develop the ideal skillset for agile development. One ideally suited to rapid and responsive development without sacrificing reliability or maintainability in the future.";
      var logan_intro = "My experiences, natural ability, and personal interests have me build the perfect skill for creating effective products, maintaining team engagement, and managing business concerns while ensuring an absolute focus on user oriented design.";
      if (Session.get("profile").id == "sim") {
        return simeon_intro;
      } else {
        return logan_intro;
      }
    },
    skills: function () {
      var simeon_skills = [
        {"title": "Development", "icon": "code",
          "skill": [
            {"text": "Java/JS", "stars": 5},
            {"text": "HTML5+CSS3", "stars": 5},
            {"text": "Meteor (multi-platform mobile apps)", "stars": 5},
            {"text": "MongoDB", "stars": 5},
            {"text": "Elastic Search", "stars": 1},
            {"text": "REST APIs", "stars": 4},
            {"text": "Samza/Kafka streaming", "stars": 1},
            {"text": "Hadoop", "stars": 1},
            {"text": "SQL + othe DBs", "stars": 4},
            {"text": "Highcharts/Plotly.js", "stars": 3},
            {"text": "Nagios", "stars": 3},
            {"text": "JUnit/Jasmine JMock/Mockito", "stars": 3},
            {"text": "Scripting (bash, python)", "stars": 2},
            {"text": "Learning new languages", "stars": 5},
          ]
        },
        {"title": "Technology", "icon": "computer",
          "skill": [
            {"text": "Ethereum+Solidity", "stars": 5},
            {"text": "Blockchain", "stars": 4},
            {"text": "'Big Data'", "stars": 2},
            {"text": "Rally/Bugzilla", "stars": 4},
            {"text": "Zendesk/Trello/Jira", "stars": 3},
            {"text": "Jenkins/Bamboo CBI", "stars": 4},
            {"text": "git+svn services", "stars": 5},
            {"text": "GIMP/Photoshop/Illustator", "stars": 4},
            {"text": "Windows", "stars": 2},
            {"text": "Linux", "stars": 5},
          ]
        },
        {"title": "Professional", "icon": "group",
          "skill": [
            {"text": "Teamwork", "stars": 5},
            {"text": "Work ethic", "stars": 5},
            {"text": "Reliable, maintainable, and scaleable development", "stars": 4},
            {"text": "Test Driven Development", "stars": 3},
            {"text": "Lean/Agile/SCRUM processes", "stars": 5},
            {"text": "Story writing and documentation", "stars": 4},
            {"text": "Technical report writing", "stars": 1},
            {"text": "Whiteboarding", "stars": 4},
            {"text": "Client support", "stars": 3},
            {"text": "Leadership", "stars": 2},
            {"text": "Teaching", "stars": 4},
            {"text": "Independent learning", "stars": 5},
          ]
        },
      ];

      var logan_skills = [
        {"title": "Professional", "icon": "color_lens",
          "skill": [
            {"text": "Product design", "stars": 5},
            {"text": "Problem solving", "stars": 5},
            {"text": "Communications", "stars": 4},
            {"text": "Big picture thinking", "stars": 5},
            {"text": "empathy/understanding audience", "stars": 5},
            {"text": "Project management", "stars": 4},
            {"text": "Sales", "stars": 3},
            {"text": "Interdisciplinary coordination", "stars": 5},
            {"text": "Stakeholder interaction", "stars": 4},
            {"text": "Agile design and development", "stars": 4},
            {"text": "Budgeting", "stars": 3},
            {"text": "Persona development", "stars": 4},
            {"text": "strategy/planning", "stars": 4},
            {"text": "Social media", "stars": 2},
            {"text": "Research", "stars": 4},
            {"text": "Efficiency", "stars": 4},
            {"text": "Adaptability", "stars": 4},
            {"text": "Conflict resolution", "stars": 4},
            {"text": "Creative direction", "stars": 5},
          ]
        },

        {"title": "Creative", "icon": "assignment",
          "skill": [
            {"text": "UX design", "stars": 5},
            {"text": "concept/wireframe design", "stars": 5},
            {"text": "Web design", "stars": 4},
            {"text": "Graphic design", "stars": 4},
            {"text": "Illustration", "stars": 3},
            {"text": "Character design", "stars": 4},
            {"text": "storyboarding/previs", "stars": 4},
            {"text": "Presentation design", "stars": 3},
            {"text": "Motion graphics", "stars": 4},
            {"text": "Animation", "stars": 5},
          ]
        },
        {"title": "Technical", "icon": "group",
          "skill": [
            {"text": "Photoshop", "stars": 5},
            {"text": "Illustrator", "stars": 3},
            {"text": "After effects", "stars": 4},
            {"text": "Flash/Animate", "stars": 5},
            {"text": "Sketch", "stars": 2},
            {"text": "InVision", "stars": 1},
            {"text": "3DS Max", "stars": 2},
            {"text": "Maya", "stars": 3},
            {"text": "Software development", "stars": 0},
            {"text": "Development processes", "stars": 5},
            {"text": "Object orientation", "stars": 5},
          ]
        },
      ];
      if (Session.get("profile").id == "sim") {
        return simeon_skills;
      } else {
        return logan_skills;
      }
    },
  });

  Template.skills.events({
    'click #button_floor0': function(event) {
      Session.set('floor', 0);
    },
  });
}