import React, { Component } from 'react'
import { connect } from 'react-redux'

class Contacts extends Component {

  render() {
    const { contacts } = this.props
    return (
      <p>
        {contacts.map((item)=>{
          return (
            <ul>
              <li>{item.name}</li>
              <li>{item.number}</li>
              <li>{item.context}</li>
            </ul>
          )
        })}
      </p>
    )
  }
}

const mapStateToProps = (appState) => {
  return {
    contacts: appState.contacts.contacts
  }
}

export default connect(mapStateToProps)(Contacts)
