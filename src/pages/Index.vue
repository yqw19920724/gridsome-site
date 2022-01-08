<template>
  <Layout>
    <!-- Page Header-->
    <header
      class="masthead"
      :style="{
        backgroundImage: `url(${$page.general.cover})`,
      }"
    >
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>{{ $page.general.title }}</h1>
              <span class="subheading">{{ $page.general.subTitle }}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <!-- Post preview-->
          <div
            class="post-preview"
            v-for="item in $page.posts.edges"
            :key="item.node.id"
          >
            <g-link :to="`/post/${item.node.id}`">
              <h2 class="post-title">
                {{ item.node.title }}
              </h2>
            </g-link>
            <p>
              <span v-for="tag in item.node.tags" :key="tag.id">
                <g-link :to="`/tag/${tag.id}`">{{ tag.title }}</g-link
                >&nbsp;&nbsp;
              </span>
            </p>
            <p class="post-meta">
              Posted by
              <a href="#!">Start Bootstrap</a>
              on {{ item.node.createdAt }}
            </p>
          </div>

          <Pager :info="$page.posts.pageInfo" />
          <!-- Divider-->
          <hr class="my-4" />
          <!-- Pager-->
          <div class="d-flex justify-content-end mb-4">
            <a class="btn btn-primary text-uppercase" href="#!"
              >Older Posts →</a
            >
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query($page: Int){
  posts: allPost(perPage: 2, page: $page) @paginate{
    pageInfo {
      totalPages
      currentPage
    }
    edges{
      node{
        id,
        title,
        tags{
          id,
          title
        },
        cover,
        content,
        createdAt
      }
    }
  }
  general: general(id: 1) {
    id,
    title,
    subTitle,
    cover
  }
}
</page-query>


<script>
import { Pager } from "gridsome";
export default {
  name: "index",
  components: {
    Pager,
  },
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
