import './App.css';

import React, { useState } from 'react'
import Person from './Person/Person'

// this is a stateful component
function App() {
  const [personsState, setPersonState] = useState({
    persons: [
      {id: 'asdasd', name: 'Max', age: 20},
      {id: 'dfdffd', name: 'Manu', age: 20},
      {id: 'cxvxvx', name: 'Hanu', age: 20}
    ],
  });

  const [personVisible, setPersonVisible] = useState({
    showPersons: false
  });

  // multuple setState calls can be used to manage multiple states

  // this is a function
  const deletePersonHandler = (personIndex) => {
    let persons = [...personsState.persons]; // this is creating a copy and does not modify the original method using a spread
    persons.splice(personIndex, 1);
    setPersonState({ persons: persons });
  }

  const togglePersonsHandler = () => {
    const doesShow = personVisible.showPersons;
    setPersonVisible({ showPersons: !doesShow });
  }

  let persons = null;
  if(personVisible.showPersons) {
    persons = (
      <div>
        { 
          personsState.persons.map((person, index) => {
            return <Person 
              key={person.id}
              name={person.name} 
              age={person.age} 
              click={() => deletePersonHandler(index)} />
          })
        }
      </div>
    )
  }

  return (
    <div className="react-demo-app">
      <h2>I am learning react!</h2>
      <button onClick={togglePersonsHandler}>TogglePersons</button><br/>
      { persons }
    </div>
  );
}

export default App;
