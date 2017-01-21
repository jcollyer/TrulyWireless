import React, { Component } from 'react'
import { connect } from 'react-redux'
import faker from 'faker'
import { loadContacts, addContact } from '../actions/contacts'

class Contacts extends Component {
  componentDidMount() {
    this.props.dispatch(loadContacts())
  }
  add(){
    const contact = {
      name: faker.name.findName(),
      context: faker.name.jobTitle(),
      number: faker.random.number({min:1, max:90}),
      id: Date.now()
    }
    this.props.dispatch(addContact(contact))
  }
  render() {
    const { contacts } = this.props
    return (
      <span>
        <button onClick={this.add.bind(this)}>Add Contact</button>
        {contacts.map((item,i)=>{
          return (
            <div key={i}>
              <li>{item.name}</li>
              <li>{item.number}</li>
              <li>{item.context}</li>
            </div>
          )
        }).reverse()}
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
