import React from 'react'
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
export const Header = () => {
  return (
    <Navbar
    collapseOnSelect
    bg="info"
    variant="dark"
    expand="md" 
    >

        <Navbar.Brand>
            <img src={logo} alt = "logo" width="50px"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-naw'/>
        <Navbar.Collapse id='basic-navbar-nav'>
            <Nav>
                <Nav.Link href='/dashboard' style={{'color':'white'}}>
                    Dashboard
                </Nav.Link>
                <Nav.Link href='/dashboard' style={{'color':'white'}}>
                    Tickets
                </Nav.Link>
                <Nav.Link href='/dashboard'style={{'color':'white'}}>
                    Logout
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}
