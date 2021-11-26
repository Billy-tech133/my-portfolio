/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://lamfihs-portfolio.herokuapp.com`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`Stack`, `Certifications`, `Projects`],
        singleTypes: [`About`],
      },
    },
  ],
}
