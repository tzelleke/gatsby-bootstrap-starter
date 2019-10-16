import React from "react"
import { css } from "@emotion/core"
import BackgroundImage from "gatsby-background-image"

import colors from "../scss/_colors.module.scss"
import { navbarHeight } from "../scss/styles"

const styles = css`
  min-height: calc(100vh - ${navbarHeight}px);
  min-height: calc(var(--vh, 1vh) * 100 - ${navbarHeight}px);
  max-height: calc(100vh - ${navbarHeight}px);
  max-height: calc(var(--vh, 1vh) * 100 - ${navbarHeight}px);
  background-color: ${colors.secondary};
  backgound-position: bottom center;
  background-repeat: none;
  background-size: cover;
`

const BackgroundSlide = ({ bgImg, children }) => (
  <BackgroundImage
    Tag="div"
    fluid={bgImg}
    css={styles}
  >
    {children}
  </BackgroundImage>
)

export default BackgroundSlide
