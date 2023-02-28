import React, {  useEffect } from 'react';
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import { axiosUsers } from '../Redux/axiosSlicer';

function Axios() {
  const dispatch=useDispatch();
  const userData=useSelector((state) => state.project1.user)
  
  

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/')
    // .then((response) => response.json())
      .then((data) => dispatch(axiosUsers(data)))
      .catch(error => console.error(error))
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ol>
      {userData?.map((user) => (
        <li key={user.id}>
          <h2>{user.title}</h2>
          <p>{user.body}</p>
        </li>
      ))}
      <br></br>
 </ol>
    </div>
  );
}

export default Axios;
