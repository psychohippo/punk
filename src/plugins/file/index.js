var Storage = require('../../utils/storage.js');

/**
 * File
 * Proxies all file events from Vapor to our Storage module.
 */
exports.name = 'punk-file';

exports.plugin = function(API) {
  var username = API.getConfig().username;

  API.registerHandler({emitter: 'vapor', event: 'readFile'}, function(fileName, callback) {
    Storage.get({prefix: username, fileName: fileName}, callback);
  });

  API.registerHandler({emitter: 'plugin', plugin: '*', event: 'readFile'}, Storage.get);

  API.registerHandler({emitter: 'vapor', event: 'writeFile'}, function(fileName, value, callback) {
    Storage.set({prefix: username, fileName: fileName, value: value}, callback);
  });

  API.registerHandler({emitter: 'plugin', plugin: '*', event: 'writeFile'}, Storage.set);
};
