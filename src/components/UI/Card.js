import React from 'react';
import classes from './Card.module.css';

export default function Card(props) {

    //use CSS Module
    // go to AddUser to wrap the add user component


    return (
        <div className={`${classes.card} ${props.className}`}>
            {props.children}
        </div>
    )
}
