// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const { getPost } = require('./src/api/post')
const { getTag } = require('./src/api/tag')
const { getGeneral } = require('./src/api/general')
module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    await Promise.all([getPost(addCollection), getTag(addCollection), getGeneral(addCollection)])
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
      // createPage({
      //   path: '/post/:id',
      //   component: './src/templates/Post.vue'
      // })
  })
}
