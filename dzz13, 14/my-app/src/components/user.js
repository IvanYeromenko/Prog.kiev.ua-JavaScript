import React from 'react';
import Button from './button';

function User(props) {
    return(<li>Name: {props.user.name}, email: {props.user.email} <Button /></li>)
}

export default User;