
import React, {useState, useEffect } from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

function New() {
  const history = useHistory();
  const [ user, setUser ] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const handleInputChange = (event) => {
    setUser({...user, [event.target.name]: event.target.value});
  }
  const saveUser = async e => {
    e.preventDefault(); 
    await axios.post("http://localhost:4004/users", user);
    history.push("/");
  }
  return (
    <div className="container">
      <div className="container w-75 shadow p-5">
        <h3 className="text-center mb-4">Add a user</h3>
        <form onSubmit={e => saveUser(e)}>
          <div className="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input type="text"
            className="form-control"
            name="name"
            value={user.name}
            onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control"
            name="email"
            value={user.email}
            onChange={(e) => handleInputChange(e)}/>
          </div>
          <div className="form-group">
            <label for="PhoneNumber">Phone</label>
            <input type="string" className="form-control"
            name="address"
            value={user.address}
            onChange={(e) => handleInputChange(e)}/>
          </div>
          <div className="form-group">
            <label for="PhoneNumber">Phone</label>
            <input type="string" className="form-control"
            name="password"
            value={user.password}
            onChange={(e) => handleInputChange(e)}/>
          </div>
          <button type="submit" className="btn btn-primary">Save User</button>
        </form>
      </div>
    </div>
  )
}

export default New 
