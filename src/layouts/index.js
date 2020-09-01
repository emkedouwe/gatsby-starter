import React from "react"
import PropTypes from "prop-types"

import "./../styles/main.scss"

const Layout = ({children}) => {
  return(
    <>
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout