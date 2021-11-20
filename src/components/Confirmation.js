import React from "react"
import { Link } from "gatsby"
import Layout from "./Layout"
const Confirmation = () => {
  return (
    <Layout>
      <section className="confirmation">
        <div className="confirm-content">
          <h4>
            Thank's for taking your time, you can count on me, it's a promise.
          </h4>
          <Link to="/" className="confirm-btn btn">
            back
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default Confirmation
