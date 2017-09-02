Template.registerHelper('logan', function() {
  return (Session.get('profile').id == "log");
});
Template.registerHelper('simeon', function() {
  return (Session.get('profile').id == "sim");
});
