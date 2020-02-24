import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import LOGO from '../LOGO.svg';

export default function SignUp () {
  return (
    <Container className='body'>
      <Row className="justify-content-md-center">
        <Col>
          <img src={LOGO} className='logo' alt='logo'/>
          {' '}

          <Form className='my-2'>
            <Form.Group controlId="login">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email.
            </Form.Text>
            </Form.Group>

            <Form.Group controlId="login">
            <Form.Label>Username</Form.Label>
            <Form.Control type="email" placeholder="Enter username" />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="outline-light" type="submit" className="my-4">
              Sign Up
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
