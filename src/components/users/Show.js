
import React, {useState, useEffect } from 'react'
import axios from 'axios'
import { useParams} from 'react-router-dom';

function Show() {
  const {id} = useParams();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });
  useEffect(() => {
    loadUser();
  }, [])
  const loadUser = async () => {
    let result = await axios.get(`http://localhost:3004/users/${id}`);  
    setUser(result.data);
  }
  const {name, email, phone } = user; 
  return (
    <div className="container shadow ">
      <h3 className="text-center">{name}</h3>
      <ul className="list-group">
        <li className="list-group-item ">{email}</li>
        <li className="list-group-item ">{phone}</li>
      </ul>
    </div>
  )
}

export default Show
