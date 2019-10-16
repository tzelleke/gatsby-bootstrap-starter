import React from "react"
import { css } from "@emotion/core"
import Img from "gatsby-image"
import Slider from "react-slick"
import { Card } from "react-bootstrap"

export default ({ data, settings }) => {
  return (
    <Slider
      {...settings}
      css={css`
        margin: 0 50px 25px;
      `}
    >
      {data.map(({ title, text, img }, index) => (
        <div className="px-1" key={index}>
          <Card style={{ minHeight: "290px" }}>
            <Img
              sizes={{ ...img.childImageSharp.fluid, aspectRatio: 21 / 9 }}
            />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{text}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </Slider>
  )
}
