import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Footer () {
  return (
    <Navbar bg='light' className='mt-4'>
      <Nav>
        <Nav.Link href='mailto: slepton.tk@gmail.com'>
          mail
        </Nav.Link>

        <Nav.Link href='https://www.instagram.com/slepton.tk/?hl=en'>
          instagram
        </Nav.Link>

        <Nav.Link href='https://twitter.com/sleptondottk'>
          twitter
        </Nav.Link>

      </Nav>
    </Navbar>
  );
}
