import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import React from "react"

import {
  faGithub,
  faTwitter,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons"

library.add(
  faGithub,
  faTwitter,
  faLinkedin
)

const Icon = ({ name }) => (
  <span title={name} >
    <FontAwesomeIcon icon={["fab", name]} />
  </span>
)

export default Icon
