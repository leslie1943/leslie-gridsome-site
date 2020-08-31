// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: '荣光无限',
  plugins: [],
  siteDescription: '继续宠爱',
  templates: {
    // 集合的名称(Post): 规则
    Post: [
      {
        path: '/posts/:id', // `posts`是自定义的, 但id 必须是 collection集合中有效的field
        component: './src/templates/Post.vue' // 展示具体id详情的页面
      },
    ]
  }
}
