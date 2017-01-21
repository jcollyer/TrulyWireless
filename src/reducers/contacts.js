import { initialState } from '../api/initial-state'
export default function accounts(state = initialState, action) {
    switch(action.type){
      case 'LOAD_CONTACTS':
        return Object.assign({}, state, {
          contacts: action.contacts
        })
      case 'ADD_CONTACT':
        const allContacts = state.contacts.concat(action.contact)
        // debugger;
        return Object.assign({}, state, {
          contacts: allContacts
        })
      default:
        return state
    }
}
