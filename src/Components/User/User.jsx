import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
  const {id, name, phone , email,} = user;
   const userStyle ={
    border: '2px solid yellow',
    borderRadius : '20px',
    padding: '10px',
    margin : '10px'
   }
  return (
    <div style={userStyle}>
      <h3>
        {name}
      </h3>
      <p> email: {email}</p>
      <p>phone: {phone}</p>
      <Link to={`/users/${id}`}>show details</Link>
    </div>
  );
};

export default User;