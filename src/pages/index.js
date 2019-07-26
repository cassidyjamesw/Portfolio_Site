import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import RecentWork from '../components/RecentWork'
import GetInTouch from '../components/GetInTouch'
import blankSpace from '../components/blankSpace'

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
            <GetInTouch />
          </section>

          <section>
            <blankSpace />
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
