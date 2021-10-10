import React from "react"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Stack from "../components/Stack"
export default function Home() {
  return (
    <Layout>
      <Hero />
      <Stack />
    </Layout>
  )
}
