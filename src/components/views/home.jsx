import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Navbar, NavItem, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

const Home = () => (
        <div className="mainpage">
          <div className="top">
            <h1>Welcome to Discover.</h1>
            <h4 className="subpara">For all your event needs.</h4>
          </div>
          <div className="container">
            <div className="mainColumn">
              <h3>What we do</h3>
              <p className="description">Discover lets you find out about events, internships and
              competitions in Singapore for you to gain more experience in various fields.</p>
              <h3>Quick and easy</h3>
              <p className="description">Gone are the days of browsing through irrelevant and long lists. With
              our sorting function, finding what you want has never been easier.</p>
            </div>
            <div className="rightColumn">
              <h3>Upcoming events</h3>
                <div className="card">
                </div>
                <div className="card">
                </div>
                <div className="card">
                </div>
            </div>
          </div>
        </div>
  );

export default Home;
