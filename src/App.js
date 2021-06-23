import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {

  const [usersList, setUsersList] = useState([])

  // pass this function in AddUser
  const addUserHandler = (uName, uAge) => {
    setUsersList(prevUsersList => {
      return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}]
    })
  }
  //go to addUser.js

  return (
    <>
    <AddUser onAddUser={addUserHandler} />
    <UsersList users={usersList}/>
    </>
  );
}

export default App;
