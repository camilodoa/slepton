import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Link from 'react-router-dom/Link';
import LOGONAME from '../LOGO-NAME.svg';

export default function Header ({path}) {
  return (
    <Navbar className="header" bg='white' expand='lg'>
      <Navbar.Brand href='/'>
        <img
          alt=''
          src={LOGONAME}
          height={50}
          className='d-inline-block align-top'
        />{' '}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Link to='/login' className='ml-auto mx-2'>
          <Button variant="outline-dark">
            Sign In
          </Button>
        </Link>

        <Link to='/signup' className='mx-2'>
          <Button variant="dark" >
            Sign Up
          </Button>
        </Link>
      </Navbar.Collapse>

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
