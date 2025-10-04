import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
  const user = useLoaderData()
  const {website, name} = user
  
  return (
    <div>
      <h3>user details here</h3>
      <h5>name: {name}</h5>
      <p>website : {website}</p>
    </div>
  );
};

export default UserDetails;