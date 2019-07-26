import React from 'react'
import Footer from './Footer'

class GetInTouch extends React.Component {
  render() {
    return (
      <div>
        <h2>Get In Touch</h2>
        <div className="4u 12u$(small)">
          <ul className="labeled-icons">
            <li>
              <h3 className="icon fa-home">
                <span className="label">Address</span>
              </h3>
              Brooklyn, NY 11249
              <br />
              United States
            </li>
            <li>
              <h3 className="icon fa-envelope-o">
                <span className="label">Email</span>
              </h3>
              <a href="mailto:cassidyjamesw@gmail.com">
                cassidyjamesw@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <Footer />
      </div>
    )
  }
}

export default GetInTouch
