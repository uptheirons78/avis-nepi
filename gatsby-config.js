let env = process.env.NODE_ENV || "development";
require("dotenv").config({ path: `./.env.${env}` });

module.exports = {
  siteMetadata: {
    title: `Avis Nepi`,
    description: `Sito web dell’Avis Comunale di Nepi odv, Sez. Mirella Falchi, fondata nel 1981, in collaborazione con la Consulta Giovani Donatori. Qui potrete trovare notizie ed aggiornamenti riguardo la nostra sezione.`,
    author: `@uptheirons78`,
    siteUrl: `localhost:8000`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        forceFullSync: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Avis Comunale di Nepi`,
        short_name: `Avis Nepi`,
        start_url: `/`,
        background_color: `#1F4997`,
        theme_color: `#1F4997`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
