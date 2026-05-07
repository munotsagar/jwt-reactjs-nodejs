import React from 'react'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        'name': '',
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
            await axios.post('http://localhost:5001/user/register', formData).then(res => console.log(res))
            navigate("/login")
        } catch (error) {
            console.error(error)
        } finally { setFormData({ 'name': '', 'email': '', 'password': '' }) }
    }

    return (
        <div className='container '>
            <Form className='w-75' onSubmit={handleSubmit}>
                <h2>Sign Up Form</h2>
                <Form.Group controlId='formBasicName'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type='name'
                        name='name'
                        placeholder='Enter Name'
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </Form.Group>
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
                    <Button variant='primary' type='submit' className='w-10'>Signup</Button>
                </div>
            </Form>
        </div>
    )
}

export default Signup
