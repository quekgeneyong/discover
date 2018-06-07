import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Navbar, NavItem, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => (
  <div className="container">
  <Navbar fixedTop className="navbar">
    <Nav>
      <LinkContainer to='../home'>
        <NavItem>Home</NavItem>
      </LinkContainer>
      <LinkContainer to='../discover'>
        <NavItem>Discover</NavItem>
      </LinkContainer>
    </Nav>
  </Navbar>
  </div>
);

export default Header;
