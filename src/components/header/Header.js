import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../contex-api/useAuth';

const Header = () => {
  const {user,logOut}=useAuth()
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand className="fs-3">Mia Bacchu Food Hotel</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Link className="mx-4 text-decoration-none fs-5" to="/home">Home</Link>
      <Link style={{display: user.email ? 'block' : 'none'}} className="me-4 text-decoration-none fs-5" to="/myOrder">My Order</Link>
      <Link to='/manageAllOrder' className="me-4 text-decoration-none fs-5">Manage ALL Order</Link>
      <Link className="me-4 text-decoration-none fs-5" to="/addService">Add Service</Link>
      <Link className="text-decoration-none fs-5">{user.displayName}</Link>
      <Link onClick={logOut} className="ms-4 text-decoration-none fs-5" to="/login">{
        user.displayName ? "logOut": "Login"
      }</Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;