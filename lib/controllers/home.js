PortfolioController = AppController.extend({
  onAfterAction: function () {
    Meta.setTitle('Application Application');
    if (Meteor.isCordova) {
    	screen.orientation.unlock();
    }
  }
});
