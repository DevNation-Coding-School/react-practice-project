import React, {useState} from 'react';
import Card from '../UI/Card';
import classes from "./AddUser.module.css";
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

export default function AddUser(props) {

    // Section 7
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    // errorModal
    const [error, setError] = useState();

    const addUserHandler = e => {
        e.preventDefault();
        console.log(username, age);
        
        if (username.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: "Please enter a valid name & age (non-empty values)"
            })
            return
            // show and hide error modal
        }
        if (+age < 1) {
            setError({
                title: 'Invalid Age',
                message: "Please enter a valid age (>0)"
            })
            // +age = number type
            return
        }
        // end
        props.onAddUser(username, age)
        // add key prop in UsersList
        // add validation
        setUsername('')
        setAge('')
    }

    const usernameChangeHandler = (e) => {
        setUsername(e.target.value)
    }

    const ageChangeHandler = e => {
        setAge(e.target.value)
    }

    // error modal
    const errorHandler = () => {
        setError(null);
        // pass this on to the ErrorModal
    }
    

    return (
        <>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}

        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username" >Username</label> 
            {/* htmlFor connects this label with input */}
            <input id="username" type="text" onChange={usernameChangeHandler} value={username}/>

            <label htmlFor="age" >Age</label> 
            <input id="age" type="number" onChange={ageChangeHandler} value={age}/>

            {/* <button type="submit">Add User</button> */}

            {/* Replace later */}
            <Button type="submit">Add User</Button>
        </form>
        </Card>
        </>
    )
}
