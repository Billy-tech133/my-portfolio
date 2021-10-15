import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Stack from "../components/Stack"
import Certifications from "../components/Certifications"
export default function Home() {
  return (
    <Layout>
      <Hero />
      <Stack />
      <Certifications />
    </Layout>
  )
}
