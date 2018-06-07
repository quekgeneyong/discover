import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { DropdownButton, MenuItem, ButtonGroup } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'

const Discover = () => (
  <div>
    <div className="filler"></div>
    <div className="dropdown">
    <DropdownButton title="Filter By">
      <LinkContainer to='./discover'>
        <MenuItem>Filter All</MenuItem>
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
        <div className="event-type">Internship</div>
        <div className="event-name">Google HQ</div>
        <div className="event-description">Location: Mountain View, California</div>
        <img className="event-image" src="https://icdn2.digitaltrends.com/image/google-headquarters-2-720x720.jpg?ver=1.jpg"></img>
        <div className="filler-2"></div>
      </li>
      <li className="feed-child">
        <div className="event-type">Internship</div>
        <div className="event-name">Microsoft HQ</div>
        <div className="event-description">Location: 1 Marina Blvd</div>
        <img className="event-image" src="https://mspoweruser.com/wp-content/uploads/2016/09/Webgroesse_HighRes_Microsoft12711.jpg"></img>
        <div className="filler-2"></div>
      </li>
      <li className="feed-child">
        <div className="event-type">Internship</div>
        <div className="event-name">Tinkercademy</div>
        <div className="event-description">Location: 5 Pereira Road</div>
        <img className="event-image" src="https://tinkercademy.com/wp-content/uploads/2017/04/full-medium.png"></img>
        <div className="filler-2"></div>
      </li>
      <li className="feed-child">
        <div className="event-type">Event</div>
        <div className="event-name">FOSSASIA 2018</div>
        <div className="event-description">Location: Lifelong Learning Institute</div>
        <img className="event-image" src="http://thelist.sg/wp-content/uploads/2018/01/Fossasia-Summit-in-Singapore.jpg"></img>
        <div className="filler-2"></div>
      </li>
      <li className="feed-child">
        <div className="event-type">Competition</div>
        <div className="event-name">Y Makeathon 2018</div>
        <div className="event-description">Location: Suntec Convention Center</div>
        <img className="event-image-placeholder"></img>
        <div className="filler-2"></div>
      </li>
      <li className="feed-child">
        <div className="event-type">Internship</div>
        <div className="event-name">KK Hospital</div>
        <div className="event-description">Location: 100 Bukit Timah Road</div>
        <img className="event-image" src="http://www.allglassservices.com.sg/wp-content/uploads/2014/12/KK-Hospital-.jpg"></img>
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
        <div className="event-type">Event</div>
        <div className="event-name">Thinktank 2018</div>
        <div className="event-description">Location: National University of Singapore</div>
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

export default Discover;
