module.exports = {
  siteMetadata: {
    title: `@nullpoo`,
    description: `nullpoo's profile site`,
    author: `@nullpoo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `nullpoo.dev`,
        short_name: `nullpoo.dev`,
        start_url: `/`,
        background_color: `#028476`,
        theme_color: `#028476`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-preact`,
  ],
}
