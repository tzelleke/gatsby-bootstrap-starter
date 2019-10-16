import React from "react"
import { graphql } from "gatsby"
import { Carousel, Container, Jumbotron } from "react-bootstrap"

import { heading, uppercased } from "../scss/styles"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductCarousel from "../components/product-carousel"
import BackgroundSlide from "../components/background-slide"

export const query = graphql`
  query {
    allHeroCarouselYaml {
      edges {
        node {
          title
          text
          img {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
    allProductCarouselYaml {
      edges {
        node {
          title
          text
          img {
            childImageSharp {
              fluid(quality: 90, maxWidth: 390) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />

      <Carousel>
        {data.allHeroCarouselYaml.edges.map(({ node }, index) => (
          <Carousel.Item key={index}>
            <BackgroundSlide bgImg={node.img.childImageSharp.fluid}>
              <Carousel.Caption>
                <h3>{node.title}</h3>
                <p>{node.text}</p>
              </Carousel.Caption>
            </BackgroundSlide>
          </Carousel.Item>
        ))}
      </Carousel>

      <section>
        <Container>
          <Jumbotron>
            <h1 css={[heading, uppercased]}>Hello World!</h1>
            <p className="text-info">Welcome to your new Gatsby site.</p>
          </Jumbotron>
        </Container>
      </section>

      <section className="bg-light py-5">
        <Container>
          <ProductCarousel
            settings={{
              dots: true,
              infinite: true,
              speed: 500,
              slidesToShow: 3,
              slidesToScroll: 1,
            }}
            data={data.allProductCarouselYaml.edges.map(({ node }) => node)}
          />
        </Container>
      </section>
    </Layout>
  )
}
