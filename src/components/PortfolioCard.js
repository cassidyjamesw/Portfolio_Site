import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
})

var cardStyle = {
  display: 'block',
  width: '30vw',
  height: '28vw',
  marginBottom: '2vw',
}

var mediaStyle = {
  width: '30vw',
  height: '0vw',
}

class PortfolioCard extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <Card style={cardStyle}>
        <CardActionArea>
          <CardMedia
            style={mediaStyle}
            className={classes.media}
            image={this.props.projthumb}
            title="Logo"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.title}
            </Typography>
            <Typography component="p">{this.props.description}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              <a href={this.props.hostedSite} className="icon fa-server">
                Deployed Site
              </a>
            </Button>
            <Button size="small" color="primary">
              <a href={this.props.gitURL} className="icon fa-github">
                GitHub
              </a>
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
    )
  }
}

export default withStyles(styles)(PortfolioCard)
