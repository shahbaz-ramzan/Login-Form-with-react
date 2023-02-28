import React, { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { setUsers } from "../Redux/projectSlicer";

function Fetch() {
  
  // const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.project.User)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((data) => dispatch(setUsers( data )))
      .catch((error) => console.error(error))
  }, []);

  return(
    <>
    <ol>
            {userData?.map((user) => (
              <li key={user.id}>
                <h2>{user.title}</h2>
                <p>{user.body}</p>
              </li>
            ))}
            <br></br>
       </ol>
    </>
    )
  
  }


export default Fetch;
