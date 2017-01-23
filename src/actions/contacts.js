import $ from 'jquery'

export function loadContacts(){
  return function(dispatch){
    $.ajax({
      url: '/api/contacts',
      dataType: 'json',
      success: function(contacts) {
        dispatch({type: 'LOAD_CONTACTS', contacts: contacts})
      }.bind(this),
      error: function(xhr, status, err) {
        console.log("\nError:" + err);
      }.bind(this)
    })
  }
}

export function addContact(contact){
  return function(dispatch){
    $.ajax({
      url: '/api/contacts',
      dataType: 'json',
      contentType: 'application/json',
      type: 'POST',
      data: JSON.stringify(contact),
      success: function(contact) {
        dispatch({type: 'ADD_CONTACT', contact: contact})
      }.bind(this),
      error: function(xhr, status, err) {
        debugger;
        console.error('contact', status, err.toString());
      }.bind(this)
    })
  }
}

export function searchContacts(query){
  return function(dispatch){
    $.ajax({
      url: '/api/contacts?name_like='+query,
      dataType: 'json',
      success: function(contacts) {
        dispatch({type: 'LOAD_CONTACTS', contacts: contacts})
      }.bind(this),
      error: function(xhr, status, err) {
        console.log("\nError:" + err);
      }.bind(this)
    })
  }
}
