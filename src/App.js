import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Home } from './Components/Home ';
import { Product } from './Components/Product';
import { Cart } from './Components/Cart';
import Contact from './Components/Contact';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import "./App.css"

function App() {
  return (
  
      <BrowserRouter>
    <Navbar expand="lg" className="bg-info  p-3 m-2">
    <Container>
      <Navbar.Brand  className="text-danger">
        <span className='h1'>FineWay Furniture Store</span>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav " />
      <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
        <Nav className='h5 text-white'>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/product">Product</Nav.Link>
          <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  </div>
    </BrowserRouter>
    
  );
}

export default App;
