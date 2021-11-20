/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:5000`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`Stack`, `Certifications`, `Projects`],
        singleTypes: [`About`],
      },
    },
  ],
}
