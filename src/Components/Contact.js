import React from 'react'
import "./contact.css"
import Form from 'react-bootstrap/Form';
import { Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
const Contact = () => {
  return (
    <div>
      <section id="container">
        <h1 className='text-center'> Registration</h1>
     <Row className='p-3'>
        <Col>
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter your name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter your age</Form.Label>
        <Form.Control type="number" placeholder="Enter your age" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter mobile no</Form.Label>
        <Form.Control type="number" placeholder="90XXXXXXXX" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message....</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder='Write a message' />
      </Form.Group>
      <Button as="input" type="submit" value="Submit" />{' '}
      <Button as="input" type="reset" value="Reset" />
        </Form>
        </Col>
      </Row>
      </section>
    </div>
  )
}

export default Contact