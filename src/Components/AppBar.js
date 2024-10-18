import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { createRoot } from "react-dom/client";
import { BrowserRouter as  Link,Route,Routes,Router, BrowserRouter } from 'react-router-dom'
import { Home } from './Home ';
import { About } from './About';
import { Product } from './Product';
import Contact from './Contact';
export const AppBar = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/products">Product</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
<div>
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/producta' element={<Product/>}/>
    <Route path='/about' element={<About/>}/>

</Routes>
</div>
      </BrowserRouter>
         
 </div>
  )
}
