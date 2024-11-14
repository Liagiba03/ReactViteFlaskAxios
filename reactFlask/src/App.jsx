import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

function App() {
  //hook users
  const[users, setUsers] = useState([]);

  //Use efffect for consult users
  useEffect(() =>{
    axios.get(apiUrl+"/users")
    .then(response =>{
      setUsers(response.data.users);
    })
    .catch(error => console.error("ERROR GET USERS:", error))
  }, [])

  return (
    <>
      
    </>
  )
}

export default App
