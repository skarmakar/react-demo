import './App.css';

import React, { useState } from 'react'
import Person from './Person/Person'

// this is a stateful component
function App() {
  const [personsState, setPersonState] = useState({
    persons: [
      {name: 'Max', age: 20},
      {name: 'Manu', age: 20},
      {name: 'Hanu', age: 20}
    ]
  });

  // multuple setState calls can be used to manage multiple states

  // this is a function
  const switchNameHandler = (newName) => {
    setPersonState({
      persons: [
        {name: newName, age: 20},
        {name: newName, age: 20},
        {name: newName, age: 20}
      ]
    })
  }

  return (
    <div className="react-demo-app">
      I am learning react!<br/>
      <button onClick={() => switchNameHandler('ButtonClick')}>Click Me</button><br/>
      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age}
        click={switchNameHandler.bind(this, 'PClick')} // better code for binding functions
      />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
}

export default App;
