import React from "react"
import { Link } from "gatsby"

import { Container, Jumbotron } from "react-bootstrap"

import { heading, uppercased } from "../scss/styles"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Jumbotron>
        <h1 className="text-primary" css={{
          ...heading,
          ...uppercased
        }}>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
      </Jumbotron>
      <div className="d-flex flex-column align-items-center">
        <p>Now go build something great.</p>
        <div
          style={{ width: `100%`, maxWidth: `300px`, marginBottom: `1.45rem` }}
        >
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </Container>
  </Layout>
)

export default IndexPage
