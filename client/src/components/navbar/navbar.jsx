import React from 'react';
import { Navbar, Nav, NavItem, FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import "./navbar.css"


const Navigation = props => {
  let navlink;
  if (props.auth.auth) {
    navlink = <NavItem onClick={props.signout}><p class="authBtn" children="SIGNOUT" /></NavItem>
  } else {
    navlink = <LinkContainer to="/login"><NavItem><p class="authBtn" children="LOGIN" /></NavItem></LinkContainer>;
  }

  return (
    <Navbar>
      <Navbar.Header >
        <Navbar.Brand>
          <LinkContainer to="/landing">
            <p id="brand">WRC:)</p>
          </LinkContainer>
        </Navbar.Brand>

        <LinkContainer to="/cart">
          <NavItem eventKey={3}>
            <p class="authBtn" children="CART" />
          </NavItem>
        </LinkContainer>
        {navlink}
        <NavItem id = "searchbar" >
          <FormGroup>
            <InputGroup>
              <FormControl type="text" placeholder="search"/>
              <InputGroup.Addon>
                <Glyphicon glyph="search" />
              </InputGroup.Addon>
            </InputGroup>
          </FormGroup>
        </NavItem>

      </Navbar.Header>
    </Navbar>

  );
}

export default Navigation;