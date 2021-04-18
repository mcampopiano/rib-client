import React, { useState } from 'react';
import { useHistory } from 'react-router';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  NavbarText
} from 'reactstrap';

export const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory()

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/clients">Clients</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contractors">Contractors</NavLink>
            </NavItem>
          </Nav>
          <NavbarText><Button color="danger" onClick={() => {
            localStorage.clear()
            history.push("/")
          }}>Log out</Button></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

// export default NavBar;