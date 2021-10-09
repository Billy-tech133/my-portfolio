import React from "react"
import { FaAlignJustify } from "react-icons/fa"
import navlinks from "../constants/links"
import { Link } from "gatsby"
const Navbar = ({ show, toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className={show ? "hide-btn" : "nav-header"}>
          <h1 className="nav-logo">Brown</h1>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignJustify />
          </button>
        </div>
        <div className="nav-links">
          {navlinks.map(link => {
            const { url, text, id } = link
            return (
              <Link to={url} key={id}>
                {text}
              </Link>
            )
          })}
        </div>
      </div>
      <button className="nav-resume btn">Resume</button>
    </nav>
  )
}

export default Navbar
