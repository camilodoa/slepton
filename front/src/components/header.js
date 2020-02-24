import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Link from 'react-router-dom/Link';
import LOGONAME from '../LOGO-NAME.svg';

export default function Header ({path}) {
  return (
    <Navbar className="header">
      <Navbar.Brand href='/' bg='white' expand='lg' fixed='top'>
        <img
          alt=''
          src={LOGONAME}
          height={50}
          className='d-inline-block align-top'
        />{' '}
      </Navbar.Brand>

      <Nav className='m-2 ml-auto' >
        <Link to='/login'>
          <Button variant="outline-dark">
            Sign In
          </Button>
        </Link>
      </Nav>

      <Nav className='m-2' >
        <Link to='/signup'>
          <Button variant="dark" >
            Sign Up
          </Button>
        </Link>
      </Nav>

      {
      //   path.pathname !== '/login' ?
      //   <div>
      //     <Nav>
      //       <Link>
      //       home
      //       </Link>
      //     </Nav>
      //     <Nav>
      //       <Link>
      //       about
      //       </Link>
      //     </Nav>
      //   </div>
      // :
      //   null
      }
    </Navbar>
  );
}
