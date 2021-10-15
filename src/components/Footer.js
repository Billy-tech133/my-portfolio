import React from "react"
import { Link } from "gatsby"
import socialLinks from "../constants/social_links"
const Footer = () => {
  return (
    <div className="footer">
      <p>Lets work together</p>
      <Link className="footer-email">lamfihbilly@gmail.com</Link>
      <div className="footer-links">
        {socialLinks.map(social => {
          const { url, icon, id } = social
          return (
            <Link className="footer-social" key={id} to={url}>
              {icon}
            </Link>
          )
        })}
      </div>
      <h5>copyright & design by @lamfihbilly </h5>
    </div>
  )
}

export default Footer
