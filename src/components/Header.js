import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="https://www.cassidyjamesw.com/" className="image avatar">
            <img src={avatar} alt="" />
          </a>
          <h1>
            <strong>James Cassidy </strong>
          </h1>
          <p>
            <strong>Brooklyn, NY</strong>
          </p>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
