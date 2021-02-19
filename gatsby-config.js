module.exports = {
  siteMetadata: {
    title: `Martin-John Hearty`,
    description: `Martin-John Hearty specializes in user interface design and frontend development`,
    author: `@Martin-John Hearty`,
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
        name: `Martin-John Hearty`,
        short_name: `MJH`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#7E01FE`,
        display: `standalone`,
        icon: `src/images/mjh-icon.png`, // This path is relative to the root of the site.
      }
    },
    {
      resolve: "@rhysforyou/gatsby-plugin-safari-site-icon",
      options: {
        icon: "./src/images/safari-pinned-tab.svg",
        color: "#7E01FE"
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
