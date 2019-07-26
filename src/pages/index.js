import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import PortfolioCard from '../components/PortfolioCard'

import proj01 from '../assets/images/projectimg/movebytes.png'
import proj02 from '../assets/images/projectimg/githubbattle.png'
import proj03 from '../assets/images/projectimg/Notes.png'
import proj04 from '../assets/images/projectimg/goggins.png'
import proj05 from '../assets/images/projectimg/eda.png'

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
            <h2>Recent Work</h2>
            <psec className="portfolioSection">
              <PortfolioCard
                title={'Movebytes'}
                description={
                  'File Transfer app. Built with React and Node, hosted on AWS.'
                }
                hostedSite={'https://www.movebytes.com/'}
                gitURL={
                  'https://github.com/Lambda-School-Labs/labs10-big-files'
                }
                projthumb={proj01}
              />

              <PortfolioCard
                title={'Github Battle'}
                description={
                  'React App that pulls data from the Github API to achieve multiple actions like Github Users Battle, Most Popular Repos and User Info'
                }
                hostedSite={'https://github-battle-86428.firebaseapp.com/'}
                gitURL={'https://github.com/cassidyjamesw/githubbattle'}
                projthumb={proj02}
              />

              <PortfolioCard
                title={'Note App'}
                description={
                  'Note Taking App built with React and Node, hosted on Heroku.'
                }
                hostedSite={'https://cassidy-backendprojectweek.netlify.com/'}
                gitURL={'https://github.com/cassidyjamesw/front-end-BEPW'}
                projthumb={proj03}
              />

              <PortfolioCard
                title={'Twitter Bot'}
                description={
                  'Twitter Bot that cycles through David Goggins Quotes. Built with Python.'
                }
                hostedSite={'https://twitter.com/QuotesGoggins'}
                gitURL={'https://github.com/cassidyjamesw/quotebot'}
                projthumb={proj04}
              />

              <PortfolioCard
                title={'NYC Rental Listing Data EDA'}
                description={
                  'Cleaned NYC Rental Listing Data and visualized relationship between rental price vs proximity to Subways.'
                }
                hostedSite={'https://github.com/cassidyjamesw/Project'}
                gitURL={'https://github.com/cassidyjamesw/Project'}
                projthumb={proj05}
              />
            </psec>
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
