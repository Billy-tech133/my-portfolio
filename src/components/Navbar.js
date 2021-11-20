import React from "react"
import { FaAlignJustify } from "react-icons/fa"
import navlinks from "../constants/links"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Navbar = ({ show, toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className={show ? "hide-btn" : "nav-header"}>
          <StaticImage
            className="nav-logo"
            layout="constrained"
            src="../assets/images/logo-removebg-preview.png"
            alt="brown"
          />
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
      <Link to="/resume" className="nav-resume btn">
        Resume
      </Link>
    </nav>
  )
}

export default Navbar
