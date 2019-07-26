import React from 'react'
import PortfolioCard from '../components/PortfolioCard'

import proj01 from '../assets/images/projectimg/movebytes.png'
import proj02 from '../assets/images/projectimg/githubbattle.png'
import proj03 from '../assets/images/projectimg/Notes.png'
import proj04 from '../assets/images/projectimg/goggins.png'
import proj05 from '../assets/images/projectimg/eda.png'

class RecentWork extends React.Component {
  render() {
    return (
      <div id="recentwork">
        <h2>Recent Work</h2>
        <psec className="portfolioSection">
          <PortfolioCard
            title={'Movebytes'}
            description={
              'File Transfer app. Built with React and Node, hosted on AWS.'
            }
            hostedSite={'https://www.movebytes.com/'}
            gitURL={'https://github.com/Lambda-School-Labs/labs10-big-files'}
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
      </div>
    )
  }
}

export default RecentWork
