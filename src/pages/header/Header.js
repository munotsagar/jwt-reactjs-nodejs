import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token")
    console.log(token);
    const handleLogOut = () => {
        localStorage.removeItem("token");
        navigate("/login")
    }
    return (
        <>
            <Navbar bg={token ? "primary" : "dark"} variant="dark">
                <Container>
                    <Navbar.Brand >{token ? "React Project Logged In" : "React Project Not Logged In"}</Navbar.Brand>
                    {/* <Nav className={`text-right parent fs-4 primary ${token ? 'text-white' : 'text-black'}`}>
                        <Nav.Link as={Link} to={'/login'} className="p-6">Login</Nav.Link>
                        <Nav.Link as={Link} to={'/register'} className="p-6">Signup</Nav.Link>
                    </Nav> */}
                    <Nav className="ml-auto">
                        {token ? (<>
                            <Nav.Link as={Link} to={'/dashboard'} className="nav-link">Dashboard</Nav.Link>
                            <Nav.Link onClick={handleLogOut} className="nav-link">Logout</Nav.Link>
                        </>) : (<>
                            <Nav.Link as={Link} to={'/login'} className="nav-link">Login</Nav.Link>
                            <Nav.Link as={Link} to={'/register'} className="nav-link">Signup</Nav.Link>
                        </>)}
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
