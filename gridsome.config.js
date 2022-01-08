// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  port: '1336',
  plugins: [
    // {
    //   use: '@gridsome/source-strapi',
    //   options: {
    //     apiURL: 'http://localhost:1337/api',
    //     queryLimit: 1000, // Defaults to 100
    //     contentTypes: ['post'],
    //     // singleTypes: ['impressum'],
    //     // Possibility to login with a Strapi user,
    //     // when content types are not publicly available (optional).
    //     // loginData: {
    //     //   identifier: '',
    //     //   password: ''
    //     // }
    //   }
    // }
  ],
  templates: {
    Post: [
      {
        path: '/post/:id',
        component: './src/templates/Post.vue'
      }
    ],
    Tag: [
      {
        path: '/tag/:id',
        component: './src/templates/Tag.vue'
      }
    ]
  }
}
