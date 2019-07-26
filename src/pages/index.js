import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import RecentWork from '../components/RecentWork'

class HomeIndex extends React.Component {
  render() {
    const siteTitle = 'CassidyJamesW'
    const siteDescription = 'Portfolio Site'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>Enthusiastic Full Stack Developer</h2>
            </header>
            <p className="skills">
              Skills in Javascript, Python, HTML/CSS, React, Redux, Node,
              Express, AWS S3
            </p>
          </section>

          <section id="two">
            <RecentWork />
          </section>

          <section id="three">
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
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
