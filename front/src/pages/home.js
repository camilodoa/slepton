import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LOGO from '../LOGO.svg';

export default function Home () {
  return (
    <Container className='body'>
      <Row>
      <Col className='my-2' sm={12}>
        <img src={LOGO} className='logo' alt='logo'/>
      </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col className='my-2'>
          {' '}
          <h3>
            <p>In the modern day and age, everyday music listeners have access
            to millions of songs at the click of the button or tap of a screen.
            With this access, it’s tedious to search for new music, and easy to
            fall into the habit of only listening to our favorites or the top
            hits.
            </p>
            <p>
            We created SLEPTON as a blog for people around the world to share
            recently released, under-the-radar tracks and albums. Each post has
            a short but meaningful editorial, justifying why that artist, track
            or album deserves a listen.
            </p>
            <p>
            What makes SLEPTON different?
            </p>
            <p>
            SLEPTON provides a communal experience for music listeners around
            the globe. Anyone can contribute to the blog, all you have to do is
            pick one of your favorite songs that you think deserves more
            attention and submit a link and a cover photo, along with a short
            passage justifying your choice.
            </p>
          </h3>
        </Col>
      </Row>
    </Container>
  );
}
