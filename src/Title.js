
// src/Title.js

import React from 'react'
import './Title.css';
import { Navlink } from 'react-router-dom'

function Title() {
  return (
    <div className="Title">
      <header>
        <h1>SFPOPOS</h1>
        <div className="Title-Subtitle"> San Franscisco Privately Owned Public Open Spaces </div>

          <div>
            <Navlink
              className="nav-link"
              activeClassName="nav-link-active"
              exact
              to="/">List</Navlink>

            <Navlink
            className="nav-link"
            activeClassName="nav-link-active"
            to="/about">About</Navlink>
          </div>

      </header>
    </div>
  )
}

export default Title
