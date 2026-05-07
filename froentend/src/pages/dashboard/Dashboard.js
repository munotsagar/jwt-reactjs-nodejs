import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Dashboard = () => {
    const [users, setUsers] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem("token")
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

        fetchUsers()
    }, [])

    return (
        <div className='container'>
            <h2>Dashboard</h2>
            {error && <p className='text-danger'>{error}</p>}
            {users.map((user) => (
                <div key={user._id}>{user.name} - {user.email}</div>
            ))}
        </div>
    )
}

export default Dashboard
