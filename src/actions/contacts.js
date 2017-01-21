import $ from 'jquery'
import request from 'superagent'

export function loadContacts(){
  return function(dispatch){
    $.ajax({
      url: '/api/contacts?_sort=views&_order=DESC',
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
      url: '/api/contacts?_sort=views&_order=DESC',
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
