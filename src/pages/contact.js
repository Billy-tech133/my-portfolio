import React from "react"
import Layout from "../components/Layout"
const contact = () => {
  return (
    <Layout>
      <section className="contact-page">
        <article className="contact-form">
          <h3>Get in touch</h3>
          <form>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-control"
              />
              <input
                type="text"
                name="email"
                placeholder="email"
                className="form-control"
              />
              <textarea
                type="text"
                rows="5"
                name="message"
                placeholder="message"
                className="form-control"
              />
              <button type="submit" className="submit-btn btn">
                Submit
              </button>
            </div>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
