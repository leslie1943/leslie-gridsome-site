<template>
  <Layout>
    <div>
      <h1>
        <i>Posts 3 with static-query</i>
      </h1>
      <ul>
        <li v-for="edge in $static.posts.edges" :key="edge.node.id">
          <g-link to="/">{{edge.node.title}}</g-link>
        </li>
      </ul>
    </div>

    <hr />
    <p>post id = 1:</p>
    <div>{{$static.post.content}}</div>
  </Layout>
</template>

<static-query>
query {
  post(id: "1") {
    content
  }
  posts: allPost{
    edges {
      node {
        id
        title
      }
    }
  }
}
</static-query>