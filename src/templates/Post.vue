<template>
  <Layout>
    <div>
      <h1>{{$page.post.title}}</h1>
      <div>{{$page.post.content}}</div>
    </div>
  </Layout>
</template>

<page-query>
# ID类型,不能为空.
query ($id: ID!) {
  post(id: $id) {
    id
    title
    content
  }
}
</page-query>
<script>
export default {
  name: 'PostPage',
  // metaInfo: {
  //   title: ''
  // }
  // 写成函数可以访问 this.$page
  metaInfo() {
    return {
      title: this.$page.post.title
    }
  }
}
</script>

<style>
</style>