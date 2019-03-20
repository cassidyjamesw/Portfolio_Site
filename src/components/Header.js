import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/jamessbighead.png'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="#" className="image avatar">
            <img src={avatar} alt="" />
          </a>
          <h1>
            <strong>James Cassidy </strong>
            <div> </div>
            Software Engineer
            <br />
            <div> </div>
            Brooklyn, NY
          </h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
