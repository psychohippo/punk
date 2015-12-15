var Dispatcher = require('../../dispatcher');
var Constants = require('../../constants');

exports.name = 'punk-changestate';

exports.plugin = function(API) {
  var steamFriends = API.getHandler('steamFriends');

  var token = Dispatcher.register(function(action) {
    switch(action.type) {
      case Constants.UserActions.CHANGE_STATE:
        steamFriends.setPersonaState(action.state);
        break;

      default:
        // ignore
    }
  });

  API.registerHandler({
    emitter: 'plugin',
    plugin: 'punk-logout',
    event: 'logout'
  }, function() {
    Dispatcher.unregister(token);
  });
};
