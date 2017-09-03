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
    });
	});

  Template.skills.helpers({
    skills: function () {
      var simeon_skills = [
        {"title": "Development", "icon": "code",
          "skill": [
            {"text": "Learning new languages", "stars": 5},
            {"text": "Java/JS", "stars": 5},
            {"text": "HTML5+CSS3", "stars": 5},
            {"text": "Meteor (multi-platform mobile apps)", "stars": 5},
            {"text": "MongoDB", "stars": 5},
            {"text": "Coding for the future", "stars": 4},
            {"text": "REST APIs", "stars": 4},
            {"text": "SQL + othe DBs", "stars": 4},
            {"text": "JUnit/JMock/Mockito/Jasmine", "stars": 3},
            {"text": "Highcharts/Plotly.js", "stars": 3},
            {"text": "Nagios", "stars": 3},
            {"text": "Scripting (bash, python)", "stars": 2},
            {"text": "Samza/Kafka straming", "stars": 1},
            {"text": "Elastic Search", "stars": 1},
            {"text": "Hadoop", "stars": 1},
          ]
        },
        {"title": "Technology", "icon": "computer",
          "skill": [
            {"text": "Linux", "stars": 5},
            {"text": "git+svn services", "stars": 5},
            {"text": "Ethereum+Solidity", "stars": 5},
            {"text": "Blockchain", "stars": 4},
            {"text": "Jenkins/Bamboo CBI", "stars": 4},
            {"text": "Rally/Bugzilla", "stars": 4},
            {"text": "GIMP/Photoshop/Illustator", "stars": 4},
            {"text": "Zendesk/Trello/Jira", "stars": 3},
            {"text": "Windows", "stars": 2},
            {"text": "'Big Data'", "stars": 2},
          ]
        },
        {"title": "Professional", "icon": "group",
          "skill": [
            {"text": "Lean/Agile/SCRUM teamwork", "stars": 5},
            {"text": "Independent learning", "stars": 5},
            {"text": "Work ethic", "stars": 5},
            {"text": "Leadership", "stars": 4},
            {"text": "Whiteboarding", "stars": 4},
            {"text": "Teaching", "stars": 4},
            {"text": "Story writing and documentation", "stars": 4},
            {"text": "Test Driven Development", "stars": 3},
            {"text": "Client support", "stars": 3},
          ]
        },
      ];

      var logan_skills = [
        {"title": "UX/Design Skills", "icon": "color_lens"},
        {"title": "Management Skills", "icon": "assignment"},
        {"title": "People Skills", "icon": "group"},
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