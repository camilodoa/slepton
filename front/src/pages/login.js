import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import LOGO from '../LOGO.svg';

export default function Login () {
  return (
    <Container className='body'>
      <Row>
        <Col className='my-2' sm={12}>
          <img src={LOGO} className='logo' alt='logo'/>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col>
          <Form className='my-2'>
            <Form.Group controlId="login">
            <Form.Label>Email address or username</Form.Label>
            <Form.Control type="email" placeholder="Enter email or username" />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="outline-light" type="submit">
              Sign in
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col className='my-2'>
          <h5>New to SLEPTON? {' '} <Button href='/signup' variant="outline-light">Sign Up</Button></h5>
        </Col>
      </Row>
    </Container>
  );
}
