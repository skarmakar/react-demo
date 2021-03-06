import React from 'react'

// this is a stateless component or dumb component
// have as many components like this
const person = (props) => {
  return (
      <p>
        I am {props.name} with {props.age} years old. {props.children}
      </p>
  )
};


export default person;
