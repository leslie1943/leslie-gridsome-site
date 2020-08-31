<template>
  <Layout>
    <div>
      <h1>
        <i>Posts 2 with page-query</i>
      </h1>
      <ul>
        <li v-for="edge in $page.posts.edges" :key="edge.node.id">
          <g-link :to="edge.node.path">{{edge.node.title}}</g-link>
        </li>
      </ul>
    </div>

    <hr />
    <p>post id = 1:</p>
    <div>{{$page.post.content}}</div>
  </Layout>
</template>

<page-query>
query {
	posts: allPost{
    edges {
      node {
        id
        title
        path
      }
    }
  }
  post(id: "1") {
    content
  }
}
</page-query>
