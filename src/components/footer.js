import React from "react"
import PropTypes from "prop-types"

import { Container } from "react-bootstrap"

const Footer = ({ siteTitle }) => (
  <footer className="text-center bg-dark text-white py-5">
    <Container>
      {siteTitle} © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </Container>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
