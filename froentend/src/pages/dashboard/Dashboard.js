import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const [users, setUsers] = useState([])
    const [error, setError] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token")
        const fetchUsers = async () => {
            
            try {
            
                const response = await axios.get('http://localhost:5001/api/users', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                setUsers(response.data)
            } catch (error) {
                setError(error.response?.data?.message || "Unable to load users")
            }
        }
        if(token)
        {
            fetchUsers()
        } else {
            navigate("/login")
        }
    }, [navigate])

    return (
        <div className='container'>
            <h2>Dashboard</h2>
            {error && <p className='text-danger'>{error}</p>}
            <table className='table table-striped table-bordered mt-4 '>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
{/*             
            {users.map((user) => (
                <div key={user._id}>{user.name} - {user.email}</div>
            ))} */}
        </div>
    )
}

export default Dashboard
