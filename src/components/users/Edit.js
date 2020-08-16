
import React, {useState, useEffect } from 'react'
import axios from 'axios'
import {useHistory, useParams} from 'react-router-dom'

function Edit() {
  const {id} = useParams();
  const history = useHistory();
  const [ user, setUser ] = useState({
    name: "",
    email: "",
    phone: "",
  })
  useEffect(() => {
    loadUser();
  }, [])

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3004/users/${id}`);
    setUser(result.data)
  }
  const handleInputChange = (event) => {
    setUser({...user, [event.target.name]: event.target.value});
  }

  const UpdateUser = async e => {
    e.preventDefault();
    await axios.patch(`http://localhost:3004/users/${id}`, user);
    history.push("/")
  }
  return (
    <div className="container">
      <div className="container w-75 shadow p-5">
        <h3 className="text-center mb-4">Edit a user</h3>
        <form onSubmit={e => UpdateUser(e)}>
          <div className="form-group">
            <label >Name</label>
            <input type="text"
            className="form-control"
            name="name"
            value={user.name}
            onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label >Email address</label>
            <input type="email" className="form-control"
            name="email"
            value={user.email}
            onChange={(e) => handleInputChange(e)}/>
          </div>
          <div className="form-group">
            <label >Phone</label>
            <input type="string" className="form-control"
            name="phone"
            value={user.phone}
            onChange={(e) => handleInputChange(e)}/>
          </div>
          <button type="submit" className="btn btn-primary">Update User</button>
        </form>
      </div>
    </div>
  )
}


export default Edit
