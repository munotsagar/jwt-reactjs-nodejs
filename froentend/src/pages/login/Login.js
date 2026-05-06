import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        'email': '',
        'password': ''
    })

    const handleInputChange = (event) => {

        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value })

    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:5000/auth/login', formData).then(res => {
                console.log(res);
                localStorage.setItem("token", res.data.token)
            })
            navigate("/dashboard")
        } catch (error) {
            console.error(error)
        } finally { setFormData({ 'email': '', 'password': '' }) }
    }
    return (
        <div className='container '>
            <Form className='w-75' onSubmit={handleSubmit}>
                <h2>Login Form</h2>

                <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        name='email'
                        placeholder='Enter Email'
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        name='password'
                        placeholder='Enter Password'
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <div className='pt-2'>
                    <Button variant='primary' type='submit' className='w-10'>Login</Button>
                </div>
            </Form>
        </div>
    )
}

export default Login