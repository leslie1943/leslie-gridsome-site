// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')

// common function for generate route
const generatePage = (api, route) => {
  api.createPages(({ createPage }) => {
    createPage({
      path: route.path,
      component: `./src/templates/${route.component}.vue`

    })
  })
}

module.exports = function (api) {

  // 数据预取
  api.loadSource(async ({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    const collection = addCollection('Post')

    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')

    for (const item of data) {
      collection.addNode({
        id: item.id,
        title: item.title,
        content: item.body
      })
    }

  })

  // 动态路由生成
  generatePage(api, { path: '/my-page', component: 'MyPage' })
  // generatePage(api, { path: '/posts/:id(\\d+)', component: 'Posts' })
}
