import React from 'react'

export default (props) => {
  return (
    <div id='add'>
      <form onSubmit={props.add.bind(this)}>
        <input type='text' name='name' placeholder='name' />
        <input type='tel' name='number' pattern='^\+?\d{10,14}$' placeholder='+13615673324' />
        <input type='text' name='context' placeholder='context' />
        <button>Add Contact</button>
      </form>
    </div>
  )
}
