import React, { useState } from 'react';
import {
  Collapse,
  Navbar as ReactstrapNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import CartWidget from './CartWidget';

export function Navbar (args) {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <ReactstrapNavbar color="warning" light expand="md" {...args}>
        <NavbarBrand href="/">Natural Honey</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/home/">Inicio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about/">
                Sobre Nosotros
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Pedidos
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>Mayorista</DropdownItem>
                <DropdownItem>Minorista</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Nav>
            <NavItem>
              <CartWidget />
            </NavItem>
          </Nav>
        </Collapse>
      </ReactstrapNavbar>
    </div>
  );
}
