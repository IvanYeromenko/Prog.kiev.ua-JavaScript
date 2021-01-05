import React from 'react';
import User from './user';

function Users(){
    let users = [
        {id:1, name: 'Ivan', email:'ae300ai@gmail.com'},
        {id:2, name: 'Petya', email:'ae300ai@gmail.com'},
        {id:3, name: 'Vasya', email:'ae300ai@gmail.com'},
        {id:4, name: 'Dima', email:'ae300ai@gmail.com'},
        {id:5, name: 'Denis', email:'ae300ai@gmail.com'}
    ]
    return(
        <ul>
            { users.map(user => (
                <User key = {user.id} user = {user}/>
            ))}
        </ul>
    );
}

export default Users;