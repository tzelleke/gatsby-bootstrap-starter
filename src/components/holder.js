import React, { Component } from "react"
import PropTypes from "prop-types"
import holderjs from "holderjs"
import { omit, pick } from "lodash-es"
import { stringify } from "qs"

const HOLDER_ATTR_NAMES = [
  "theme",
  "random",
  "bg",
  "fg",
  "text",
  "size",
  "font",
  "align",
  "outline",
  "lineWrap",
  "auto",
]

const REGEX_PERCENTAGE = /\d+(%|p)/

const REGEX_PX = /\d+px%/

const REGEX_NUMBER = /\d+/

const SHOULD_UPDATE_ON_RESIZE_DEFAULT = false

function sanitizeNumber(numberString) {
  return String(Number.parseInt(String(numberString), 10))
}

function sanitizeSizeValue(size) {
  let stringSize = size
  if (typeof stringSize !== "string") {
    stringSize = String(stringSize)
  }

  if (REGEX_PERCENTAGE.test(stringSize)) {
    return `${sanitizeNumber(stringSize)}p`
  }

  if (REGEX_PX.test(stringSize)) {
    return sanitizeNumber(stringSize)
  }

  if (REGEX_NUMBER.test(stringSize)) {
    return stringSize
  }

  console.warn(`holder-js size not valid: ${size}, defaulting to 100%`)

  return "100p"
}

function createPlaceholder(
  node,
  updateOnResize = SHOULD_UPDATE_ON_RESIZE_DEFAULT
) {
  holderjs.run({
    domain: "holder.js",
    images: node,
    object: null,
    bgnodes: null,
    stylenodes: null,
  })
  if (updateOnResize === false) {
    holderjs.setResizeUpdate(node, false)
  }
}

function updatePlaceholder(
  node,
  updateOnResize = SHOULD_UPDATE_ON_RESIZE_DEFAULT
) {
  holderjs.setResizeUpdate(node, Boolean(updateOnResize))
}

class Holder extends Component {
  constructor(props) {
    super(props)
    this.placeholder = React.createRef()
  }

  render() {
    const { width, height } = this.props
    const holderConfig = pick(this.props, HOLDER_ATTR_NAMES)
    const htmlAttrs = omit(this.props, HOLDER_ATTR_NAMES)
    const src = `holder.js/${sanitizeSizeValue(width)}x${sanitizeSizeValue(
      height
    )}?${stringify(holderConfig)}`
    return <img ref={this.placeholder} data-src={src} {...htmlAttrs} />
  }

  componentDidMount() {
    createPlaceholder(this.placeholder.current, this.props.updateOnResize)
  }

  componentDidUpdate() {
    updatePlaceholder(this.placeholder.current, this.props.updateOnResize)
  }
}

Holder.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  updateOnResize: PropTypes.bool,
}

Holder.defaultProps = {
  width: "100",
  height: "100",
}

export default Holder
