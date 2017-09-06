Template.registerHelper('logan', function() {
  return (Session.get('profile').id == "log");
});
Template.registerHelper('simeon', function() {
  return (Session.get('profile').id == "sim");
});
Template.registerHelper('profile', function() {
  return Session.get('profile');
});