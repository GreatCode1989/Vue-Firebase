<template>
  <div class="home">
    <BlogPost :post="welcomeScreen"/>
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index"/>
   
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue'

export default {
  name: "home",
  components: {BlogPost},
  data() {
    return {
      welcomeScreen: {
        title: "Welcome",
        blogPost:
          "It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.",
      welcomeScreen: true,
      photos: 'coding',
        },
        sampleBlogPost: [
          {
            title: 'This is a Filter Title!',
            blogHtml: 'This is a filter blog post title!',
            blogCoverPhoto: 'beautiful-stories',
          },
          {
            title: 'This is a Filter Title!',
            blogHtml: 'This is a filter blog post title!',
            blogCoverPhoto: 'designed-for-everyone',
          },
        ]
    };
  },
};
</script>
