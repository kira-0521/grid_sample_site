// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'gridname-sample',
  icon: "~/src/favicon.png",
  touchicon: "~/src/favicon.ico",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      },
    },
  ]
}
