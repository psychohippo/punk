var React = require('react');

var UIActions = require('../../actions/ui-actions.js');
var FriendsActions = require('../../actions/friends-actions.js');
var UIStore = require('../../stores/ui-store.js');

var AddFriendDialog = React.createClass({
  _onChange: function() {
    var newState = this.state;
    newState.uiState = UIStore.get();

    this.setState(newState);
  },

  _onFriendIdChange: function(event) {
    var newState = this.state;
    newState.friendId = event.target.value;

    this.setState(newState);
  },

  _onCancel: function() {
    UIActions.addFriendCloseDialog();
  },

  _onSave: function() {
    var id = this.state.friendId.trim();

    if(id !== '') {
      FriendsActions.add(id);
      UIActions.addFriendCloseDialog();
    }
  },

  getInitialState: function() {
    return {
      uiState: UIStore.get(),
      friendId: ''
    };
  },

  componentDidMount: function() {
    UIStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    UIStore.removeChangeListener(this._onChange);
  },

  render: function() {
    if(!this.state.uiState.isAddFriendDialogOpen) {
      return <div/>;
    }

    return (
      <dialog open>
        <header className="toolbar toolbar-header">
            <h1 className="title">Add friend</h1>
        </header>

        <div className="content">
            <input
              type="text"
              className="form-control"
              placeholder="SteamID64"
              ref="friendId"
              value={this.state.friendId}
              onChange={this._onFriendIdChange} />
        </div>

        <footer className="toolbar toolbar-footer">
            <div className="toolbar-actions">
                <button className="btn btn-default" onClick={this._onCancel}>Cancel</button>
                <button className="btn btn-primary pull-right" onClick={this._onSave}>Save</button>
            </div>
        </footer>
      </dialog>
    );
  }
});

module.exports = AddFriendDialog;