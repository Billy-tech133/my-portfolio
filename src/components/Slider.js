import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Slider from "react-slick"

const Slide = ({ nodes }) => {
  return (
    <div className="certificate-cards">
      {nodes.map(card => {
        const {
          id,
          name,
          url,
          image: { localFile },
        } = card
        return (
          <div key={id} className="certificate-card">
            <GatsbyImage
              className="certificate-img"
              image={getImage(localFile)}
              alt={name}
            />
            <h5 className="certificate-name">{name}</h5>
            <Link to={url} className="certificate-btn btn">
              View Certificate
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Slide
