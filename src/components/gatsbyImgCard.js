import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default gatsCard

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "nyc.jpg" }) {
      ...squareImage
    }
  }
`
export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 200, maxHeight: 200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
