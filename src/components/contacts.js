import React, { Component } from 'react'
import { connect } from 'react-redux'
import faker from 'faker'
import { loadContacts, addContact, searchContacts } from '../actions/contacts'

class Contacts extends Component {
  componentDidMount() {
    this.loadContacts()
  }
  loadContacts(){
    this.props.dispatch(loadContacts())
  }
  searchContacts(q){
    this.props.dispatch(searchContacts(q))
  }
  add(e){
    e.preventDefault()
    debugger;
    const contact = {
      name: e.target.name.value,
      context: e.target.context.value,
      number: e.target.number.value,
      id: Date.now()
    }
    this.props.dispatch(addContact(contact))
    e.target.reset()
  }
  shouldLoad(e){
    if( e.target.value.length == 0){
      this.loadContacts()
    } else {
      this.searchContacts(e.target.value)
    }
  }
  render() {
    const { contacts } = this.props
    const contactList = contacts.length > 0 ? contacts.map((item,i)=>{
      return (
        <div className='contact' key={i}>
          <li>{item.name}</li>
          <li>{item.number}</li>
          <li>{item.context}</li>
        </div>
      )
    }).reverse() : "no records found"
    return (
      <span>
        <form onSubmit={this.add.bind(this)}>
          <input type='text' name='name' placeholder='name' />
          <input type='tel' name='number' pattern='^\+?\d{10,14}$' placeholder='+13615673324' />
          <input type='text' name='context' placeholder='context' />
          <button>Add Contact</button>
        </form>
        <br />
        <br />
        ---------
        <input type='text' name='search' placeholder='search by name' onChange={this.shouldLoad.bind(this)} />
        <br />
        <br />
        {contactList}
      </span>
    )
  }
}

const mapStateToProps = (appState) => {
  return {
    contacts: appState.contacts.contacts
  }
}

export default connect(mapStateToProps)(Contacts)
