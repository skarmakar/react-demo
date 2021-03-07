import React from 'react'

// this is a stateless component or dumb component
// have as many components like this
const person = (props) => {
  return (
      <p onClick={props.click}>
        I am {props.name} with {props.age} years old. {props.children}
        <br/>
        <input type="text" onChange={props.changed} value={props.name}/>
      </p>
  )
};


export default person;
