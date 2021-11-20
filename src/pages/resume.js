import React from "react"
import Layout from "../components/Layout"
const resume = () => {
  return (
    <div>
      <Layout>
        <main className="resume-section">
          <div className="inner-section">
            <section className="topic">
              <article className="resume-card">
                <div className="resume-cardInner">
                  <h4>Nyuykisamo Lamfih Sevidzem</h4>
                  <h4>lamfihbilly@gmail.com</h4>
                  <h4>+237 678723293</h4>
                </div>
              </article>
            </section>
            <section className="topic">
              <h2>Web Developer</h2>
              <div className="underline card-underline"></div>
              <article className="resume-card">
                <div className="resume-cardInner">
                  <h5 className="card-text">
                    Web developer with hands-on experience building responsive
                    websites, web developement, including performance,
                    functional, integration, system, and user acceptance..
                  </h5>
                </div>
              </article>
            </section>
            <section className="topic">
              <h2>Education</h2>
              <div className="underline card-underline"></div>
              <article className="resume-card">
                <h5 className="card-text">
                  Over 15 Academic and Pro ffesional Certifications from top
                  Uiversities from around the world such as the duke University,
                  Hong Kong University of Science and Technology, The Michigan
                  University, and Even Proffesional Institution such as IBM,
                  touching on the topics of web development, Python, IBM Cloud,
                  Database administration, Etc.
                  <br></br>I am also currently Enrolled in the University of the
                  people I expect to graduate by 2023.
                </h5>
              </article>
            </section>
            <section className="topic">
              <h2>Skills</h2>
              <div className="underline card-underline"></div>
              <article className="resume-card skill">
                <h5 className="card-text">HTML</h5>
                <h5 className="card-text">CSS</h5>
                <h5 className="card-text">javascript</h5>
                <h5 className="card-text">React.js</h5>
                <h5 className="card-text">Gatsby.js</h5>
                <h5 className="card-text">firebase</h5>
                <h5 className="card-text">Git</h5>
              </article>
            </section>
          </div>
        </main>
      </Layout>
    </div>
  )
}

export default resume
