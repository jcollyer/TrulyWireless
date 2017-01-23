import React from 'react'

export default (props) => {
  return(
    <div id='search'>
      Search: <input type='text' name='search' placeholder='search by name' onChange={props.search.bind(this)} />
    </div>
  )
}
