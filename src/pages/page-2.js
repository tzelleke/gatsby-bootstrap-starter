import React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Holder from "../components/holder"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Container className="link-hover-underline py-5">
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
      <Holder
        width="1600"
        height="900"
        auto="yes"
        className="img-fluid"
      />
    </Container>
  </Layout>
)

export default SecondPage
