import React, {useState, useEffect } from 'react'
import axios from 'axios'
import {Link, useHistory} from 'react-router-dom'

const Home  = () => {
  const history = useHistory();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUsers();
  }, [])

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3004/users");
    setUsers(result.data)
  }

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3004/users/${id}`);
    loadUsers();
  }
  return (
    <div className="container">
      <div className="py-4">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {
            users.reverse().map((user) => (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <Link className="btn btn-outline-primary mr-2" to={`users/${user.id}`}>Show</Link>
                  <Link className="btn btn-outline-warning mr-2" to={`users/${user.id}/edit`}>Edit</Link>
                  <Link className="btn btn-outline-danger mr-2" onClick={() => deleteUser(user.id)}>Delete</Link>
                </td>
              </tr> 
            ))
          }
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default Home
