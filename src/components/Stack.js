import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const Stack = () => {
  const {
    allStrapiStack: { nodes },
  } = useStaticQuery(graphql`
    {
      allStrapiStack {
        nodes {
          name
          id
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  layout: FIXED
                  width: 128
                  height: 128
                )
              }
            }
          }
        }
      }
    }
  `)
  return (
    <main className="stack">
      <h2 className="stack-heading">my skill stack</h2>
      <div className="stack-content">
        {nodes.map(stack => {
          const {
            name,
            id,
            image: { localFile },
          } = stack
          return (
            <div key={id} className="single-stack">
              <GatsbyImage
                className="stack-img"
                image={getImage(localFile)}
                alt={name}
              />
              <h4>{name}</h4>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default Stack
