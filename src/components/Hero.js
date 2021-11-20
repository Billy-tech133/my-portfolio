import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
const Hero = () => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <h2>hello there I'm lamfih, and build the web</h2>
          <div className="underline"></div>
          <h4>
            I am a web developer with experience building responsive and dynamic
            websites.
          </h4>
          <Link to="/contact" className="btn">
            contact me
          </Link>
        </article>
        <StaticImage
          placeholder="blurred"
          src="../assets/images/brown.png"
          className="hero-img"
          alt="billy"
        />
      </div>
    </header>
  )
}

export default Hero
