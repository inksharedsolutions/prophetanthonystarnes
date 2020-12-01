import React from "react"
// import PropTypes from "prop-types"

//components
import Footer from './footer';

import "./layout.css"

const Layout = ({children}) => {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}
export default Layout
