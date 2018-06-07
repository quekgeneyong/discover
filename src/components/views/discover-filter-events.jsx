import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { DropdownButton, MenuItem, ButtonGroup } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'

const DiscoverEvents = () => (
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
        <div className="event-type">Event</div>
        <div className="event-name">FOSSASIA 2018</div>
        <div className="event-description">Location: Lifelong Learning Institute</div>
        <img className="event-image" src="http://thelist.sg/wp-content/uploads/2018/01/Fossasia-Summit-in-Singapore.jpg"></img>
        <div className="filler-2"></div>
      </li>
      <li className="feed-child">
        <div className="event-type">Event</div>
        <div className="event-name">Thinktank 2018</div>
        <div className="event-description">Location: National University of Singapore</div>
        <img className="event-image-placeholder"></img>
        <div className="filler-2"></div>
      </li>
    </ul>
  </div>
);

export default DiscoverEvents;
