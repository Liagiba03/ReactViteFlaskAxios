import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

function App() {
  //hook users
  const[users, setUsers] = useState([]);

  //Use efffect for consult users
  useEffect(() =>{
    axios.get(apiUrl+"/users")
    .then(response =>{
      setUsers(response.data.users);
      console.log("YESZ")
    })
    .catch(error => console.error("ERROR GET USERS:", error))
  }, [])

  return (
    <>
      <div>
        <h1>USERS FROM FLASK</h1>
        <ul>
          {users.map((user, index) =>(
            <li key={index}>{user}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
