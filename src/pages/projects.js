import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import { FaGithub, FaArrowAltCircleUp } from "react-icons/fa"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const projects = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <main className="projects">
        <div className="inner-container">
          {data.allStrapiProjects.nodes.map(item => {
            const {
              id,
              image: { localFile },
              projectTitle,
              projectDescription,
              stack,
              codeUrl,
              previewUrl,
            } = item
            const Image = getImage(localFile)
            return (
              <article className="project-card" key={id}>
                <GatsbyImage
                  image={Image}
                  layout="fixed"
                  placeholder="blurred"
                  className="project-image"
                  alt={projectTitle}
                />
                <div className="project-info">
                  <h3>{projectTitle}</h3>
                  <p>{projectDescription}</p>
                  <div className="project-stack">
                    {stack.map(skill => {
                      const { id, title } = skill
                      return (
                        <span className="project-skill" key={id}>
                          {title}
                        </span>
                      )
                    })}
                  </div>
                  <div className="project-links">
                    <Link to={codeUrl} className="project-link">
                      <h5>source code</h5>
                      <FaGithub className="project-fa" />
                    </Link>
                    <Link to={previewUrl} className="project-link">
                      <h5>view project</h5>
                      <FaArrowAltCircleUp className="project-fa" />
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        id
        projectTitle
        projectDescription
        codeUrl
        previewUrl
        stack {
          id
          title
        }
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`
export default projects
