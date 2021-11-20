import React from "react"
import Layout from "../components/Layout"
import Confirmation from "../components/Confirmation"
import { useForm } from "@formspree/react"
const Contact = () => {
  const [state, handleSubmit] = useForm("mdoyvovw")
  if (state.succeeded) {
    return <Confirmation />
  }
  return (
    <Layout>
      <section className="contact-page">
        <article className="contact-form">
          <h3>Get in touch</h3>
          <form onSubmit={handleSubmit}>
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
              <button
                type="submit"
                disable={state.submitting}
                className="submit-btn btn"
              >
                Submit
              </button>
            </div>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default Contact
