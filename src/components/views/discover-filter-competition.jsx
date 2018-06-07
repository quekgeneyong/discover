import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { DropdownButton, MenuItem, ButtonGroup } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'

const DiscoverCompetition = () => (
  <div>
    <div className="filler"></div>
    <div className="dropdown">
    <DropdownButton title="Filter By">
      <LinkContainer to='./discover'>
        <MenuItem>All</MenuItem>
      </LinkContainer>
      <LinkContainer to='./discover-filter-internship'>
        <MenuItem>Internships</MenuItem>
      </LinkContainer>
      <LinkContainer to='./discover-filter-competition'>
        <MenuItem>Competitions</MenuItem>
      </LinkContainer>
      <LinkContainer to='./discover-filter-events'>
        <MenuItem>Events</MenuItem>
      </LinkContainer>
    </DropdownButton>
    </div>
    <ul className="feed-container">
      <li className="feed-child">
        <div className="event-type">Competition</div>
        <div className="event-name">Y Makeathon 2018</div>
        <div className="event-description">Location: Suntec Convention Center</div>
        <img className="event-image-placeholder"></img>
        <div className="filler-2"></div>
      </li>
      <li className="feed-child">
        <div className="event-type">Competition</div>
        <div className="event-name">Aerochallenge 19</div>
        <div className="event-description">Location: Ngee Ann Polytechnic</div>
        <img className="event-image-placeholder"></img>
        <div className="filler-2"></div>
      </li>
      <li className="feed-child">
        <div className="event-type">Competition</div>
        <div className="event-name">X Hackathon 2018</div>
        <div className="event-description">Location: Singapore Polytechnic</div>
        <img className="event-image-placeholder"></img>
        <div className="filler-2"></div>
      </li>
    </ul>
  </div>
);

export default DiscoverCompetition;
