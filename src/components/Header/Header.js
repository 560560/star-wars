import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const Header = () => {
    return (
      <div>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Navbar.Brand href="/" className="mr-5">STAR WARS</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">

                <Nav className="mr-auto text-md-left text-right">
                    <Nav.Link as={Link} to="/">Sections</Nav.Link>
                    <Nav.Link as={Link} to="/planets/1">Planets</Nav.Link>
                    <Nav.Link as={Link} to="/films/1">Films</Nav.Link>
                    <Nav.Link as={Link} to="/people/1">People</Nav.Link>
                    <Nav.Link as={Link} to="/species">Species</Nav.Link>
                    <Nav.Link as={Link} to="/vehicles">Vehicles</Nav.Link>
                    <Nav.Link as={Link} to="/starships">Starships</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
      </div>
    );
}

export default Header;