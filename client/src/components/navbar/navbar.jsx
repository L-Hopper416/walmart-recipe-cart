import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const style = {
  navbar: {
    background: "white",
    fontFamily: "'Open Sans','Helvetica Neue',Arial,sans-serif",
    fontWeight: "bold"
  },
  header: {
    color: "#f05f40",
  },
  navItem: {
    color: "#212529"
     
  }
}

const Navigation = props => {
  let navlink;
  if (props.auth.auth) {
    navlink = <NavItem onClick={props.signout}><span children="SIGNOUT" style={style.navItem} /></NavItem>
  } else {
    navlink = <LinkContainer to="/login"><NavItem><span children="LOGIN" style={style.navItem} /></NavItem></LinkContainer>;
  }

  return (
    <Navbar style={style.navbar} collapseOnSelect>
      <Navbar.Header >

        <LinkContainer to="/landing">
          <Navbar.Brand>
            <span style={style.header}>WALMART-RECIPE-CART</span>
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <LinkContainer to="/ingredients">
            <NavItem eventKey={1}>
              <span children="INGREDIENTS" style={style.navItem} />
            </NavItem>
          </LinkContainer>
          <LinkContainer to="/recipes">
            <NavItem eventKey={2} >
              <span children="RECIPES" style={style.navItem} />
            </NavItem>
          </LinkContainer>
          <LinkContainer to="/cart">
            <NavItem eventKey={3}>
              <span children="CART" style={style.navItem} />
            </NavItem>
          </LinkContainer>
          {navlink}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;