import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddContact from './add-contact'
import SearchContact from './search-contacts'
import { loadContacts, addContact, searchContacts } from '../actions/contacts'

class Contacts extends Component {
  componentDidMount() {
    this.loadContacts()
  }
  loadContacts(){
    this.props.dispatch(loadContacts())
  }
  search(q){
    this.props.dispatch(searchContacts(q))
  }
  add(e){
    e.preventDefault()
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
      this.search(e.target.value)
    }
  }
  render() {
    const { contacts } = this.props
    const contactList = contacts.length > 0 ? contacts.map((item,i)=>{
      return (
        <div className='contact' key={i}>
          <li><div className='label'>Name:</div> {item.name}</li>
          <li><div className='label'>Number:</div>{item.number}</li>
          <li><div className='label'>Context:</div>{item.context}</li>
        </div>
      )
    }).reverse() : <h1>No Records Found</h1>
    return (
      <span>
        <AddContact add={this.add.bind(this)} />
        <SearchContact search={this.shouldLoad.bind(this)} />
        <div id='contacts'>{contactList}</div>
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
