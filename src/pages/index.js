import React from 'react'
import Helmet from 'react-helmet'

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
              Express, Django, AWS
            </p>
          </section>

          <section id="two">
            <h2>Recent Work</h2>
            <psec className="portfolioSection">
              <PortfolioCard
                title={'Movebytes'}
                description={
                  'File sharing site built with React, Node, and AWS.'
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
                  'File sharing site built with React, Node, and AWS.'
                }
                hostedSite={'https://github-battle-86428.firebaseapp.com/'}
                gitURL={'https://github.com/cassidyjamesw/githubbattle'}
                projthumb={proj02}
              />

              <PortfolioCard
                title={'Note App'}
                description={
                  'Evernote Clone built with React, Node, and Heroku'
                }
                hostedSite={'https://cassidy-backendprojectweek.netlify.com/'}
                gitURL={'https://github.com/cassidyjamesw/front-end-BEPW'}
                projthumb={proj03}
              />

              <PortfolioCard
                title={'Twitter Bot'}
                description={'Twitter Quote Bot built with python'}
                hostedSite={'https://twitter.com/QuotesGoggins'}
                gitURL={'https://github.com/cassidyjamesw/quotebot'}
                projthumb={proj04}
              />

              <PortfolioCard
                title={'NYC Rental Listing Data EDA'}
                description={'Exploratory Data Analysis on NYC rental data'}
                hostedSite={'https://github.com/cassidyjamesw/Project'}
                gitURL={'https://github.com/cassidyjamesw/Project'}
                projthumb={proj05}
              />
            </psec>
          </section>

          <section id="three">
            <h2>Get In Touch</h2>

            <div className="row">
              <div className="8u 12u$(small)">
                <form method="post" action="#">
                  <div className="row uniform 50%">
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="12u">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        rows="4"
                      />
                    </div>
                  </div>
                </form>
                <ul className="actions">
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </div>
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
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
