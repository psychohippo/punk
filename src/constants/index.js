module.exports = {
  FriendsActions: {
    FRIENDS_INSERT_OR_UPDATE: 'FRIENDS_INSERT_OR_UPDATE',
    REMOVE: 'REMOVE',
    BLOCK: 'BLOCK'
  },

  ChatActions: {
    CHAT_OPEN: 'CHAT_OPEN',
    CHAT_SWITCH: 'CHAT_SWITCH',
    CHAT_CLOSE: 'CHAT_CLOSE',
    CHAT_NEW_INCOMING_MESSAGE: 'CHAT_NEW_INCOMING_MESSAGE',
    CHAT_NEW_OUTGOING_MESSAGE: 'CHAT_NEW_OUTGOING_MESSAGE',
    CHAT_CLEAR: 'CHAT_CLEAR'
  },

  UserActions: {
    USER_UPDATE: 'USER_UPDATE',
    CHANGE_STATE: 'CHANGE_STATE',
    CHANGE_NAME: 'CHANGE_NAME'
  },

  UIActions: {
    LOGOUT: 'LOGOUT',
    CHANGE_NAME_OPEN_DIALOG: 'CHANGE_NAME_OPEN_DIALOG',
    CHANGE_NAME_CLOSE_DIALOG: 'CHANGE_NAME_CLOSE_DIALOG'
  },

  MessageTypes: {
    CHAT_OUR_MESSAGE: 'our-message',
    CHAT_THEIR_MESSAGE: 'their-message'
  }
};
