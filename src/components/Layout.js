import React, { useState } from "react"
import "../assets/css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
const Layout = ({ children }) => {
  const [show, setShow] = useState(false)
  const toggleSidebar = () => {
    setShow(!show)
  }
  return (
    <>
      <Navbar show={show} toggleSidebar={toggleSidebar} />
      <Sidebar show={show} toggleSidebar={toggleSidebar} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
