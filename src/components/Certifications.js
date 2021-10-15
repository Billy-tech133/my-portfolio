import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Slide from "./Slider"

const Certifications = () => {
  const {
    allStrapiCertifications: { nodes },
  } = useStaticQuery(graphql`
    {
      allStrapiCertifications(limit: 6) {
        nodes {
          id
          name
          url
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: FIXED
                  placeholder: BLURRED
                  width: 300
                  height: 300
                  transformOptions: { cropFocus: CENTER, fit: FILL, trim: 2 }
                  aspectRatio: 1.5
                )
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section className="certifications">
      <div className="inner-certificate">
        <h2>All Certifications</h2>
        <Slide nodes={nodes} />
      </div>
    </section>
  )
}

export default Certifications
