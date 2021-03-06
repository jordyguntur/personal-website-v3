import React from "react"
import PropTypes from "prop-types"
import { IconGithub, IconLinkedin, IconInstagram } from "@components/icons"

const FormattedIcon = ({ name }) => {
  switch (name) {
    case "Github":
      return <IconGithub />
    case "Linkedin":
      return <IconLinkedin />
    case "Instagram":
      return <IconInstagram />
    default:
      return <IconGithub />
  }
}

FormattedIcon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default FormattedIcon
