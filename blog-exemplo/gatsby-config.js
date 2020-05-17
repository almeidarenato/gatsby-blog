module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Blog JS`,
    author: `Renato Almeida`,
    description: `Blog de exemplo criado para mostrar como é simples usar o gatby.js`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/renat0alm`,
      },
      {
        name: `github`,
        url: `https://github.com/almeidamrq`,
      },
    ],
  },
}
