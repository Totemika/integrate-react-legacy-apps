(function ComponentInitializator(React, App) {
  'use strict';

  var createCell = function (type, text) {
    return React.createElement(type, null, text);
  };

  var createTheadRow = function () {
    return React.createElement('tr', null,
      createCell('th', 'Name'),
      createCell('th', 'Phone number'),
      createCell('th', 'Email')
    );
  };

  var createThead = function () {
    return React.createElement('thead', null, createTheadRow());
  };

  var createTbodyRow = function (contact, index) {
    return React.createElement('tr', { key: index },
      createCell('td', contact.name),
      createCell('td', contact.phone),
      createCell('td', contact.email)
    );
  };

  var createTbody = function (contacts) {
    var rows = contacts.map(function (contact, index) {
      return createTbodyRow(contact, index);
    });
    return React.createElement('tbody', null, rows);
  };

  var TableComponent = React.createClass({
    getInitialState: function () {
      return {
        contacts: []
      };
    },
    setContacts: function (contacts) {
      this.setState({
        contacts: contacts
      });
    },
    render: function () {
      return React.createElement('table',
        { className: 'table table-stripped table-bordered table-hover' },
        createThead(),
        createTbody(this.state.contacts)
      );
    }
  });

  App.components.TableComponent = TableComponent;
})(React, window.App);
