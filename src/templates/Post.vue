<template>
  <Layout>
    <!-- Page Header-->
    <header
      class="masthead"
      :style = "{
        backgroundImage: `url(${$page.post.cover})`
      }"
      style="background-image: url('/img/post-bg.jpg')"
    >
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="post-heading">
              <h1>{{$page.post.title}}</h1>
              <!-- <h2 class="subheading">
                Problems look mighty small from 150 miles up
              </h2> -->
              <span class="meta">
                Posted by
                <a href="#!">Start Bootstrap</a>
                on {{$page.post.createdAt}}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Post Content-->
    <article class="mb-4">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7" v-html="strToHtml($page.post.content)">
            
          </div>
        </div>
      </div>
    </article>
  </Layout>
</template>
<page-query>
query($id: ID!){
  post: post(id: $id) {
    id,
    title,
    cover,
    content,
    createdAt
  }
}
</page-query>
<script>
import { markdownToHtml } from '../utils/index'
export default {
  name: "PostIndex",
  methods: {
    strToHtml(str) {
      return markdownToHtml(str)
    }
  }
};
</script>

<style>
</style>