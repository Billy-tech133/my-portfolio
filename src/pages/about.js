import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const About = ({
  data: {
    allStrapiAbout: { nodes },
  },
}) => {
  console.log(nodes)
  const { title, aboutMe, stack } = nodes[0]

  return (
    <Layout>
      <section className="about">
        <div className="about-content">
          <div>
            <StaticImage
              placeholder="blurred"
              src="../assets/images/hero.png"
              className="about-img"
              alt={title}
            />
          </div>
          <article className="about-text">
            <h2 className="about-title">{title}</h2>
            <div className="underline"></div>
            <p className="about-desc">{aboutMe}</p>
            <div className="project-stack about-stack">
              {stack.map(skill => {
                const { id, title } = skill
                return (
                  <span className="project-skill about-skill" key={id}>
                    {title}
                  </span>
                )
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        title
        aboutMe
        stack {
          id
          title
        }
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(
                transformOptions: { cropFocus: CENTER, fit: COVER }
                width: 200
                placeholder: BLURRED
                height: 200
              )
            }
          }
        }
      }
    }
  }
`
export default About
