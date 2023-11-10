<template>
  <div class="blog-card-wrap">
    <div class="blog-cards container">
      <div class="toggle-edit">
        <span>Toogle Editing Post</span>
        <input type="checkbox" v-model="editPost" />
      </div>
      <BlogCard
        :post="post"
        v-for="(post, index) in sampleBlogCards"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import BlogCard from "../components/BlogCard.vue";

export default {
  name: "blogs",
  components: { BlogCard },

  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    },
    editPost: {
        get() {
            return this.$store.state.editPost
        },
        set(payload) {
            this.$store.commit('toggleEditPost', payload)
        }
    }
  },
  beforeDestroy() {
    this.$store.commit('toggleEditPost', false)
  },
};
</script>

<style lang="scss" scoped>
.blog-cards {
  position: relative;

  .toggle-edit {
    display: flex;
    align-items: center;
    position: absolute;
    top: -55px;
    right: 15px;

    span {
      margin-right: 17px;
      font-weight: bold;
      color: #5a6368;
      font-size: 18px;
    }
    input[type="checkbox"] {
      position: relative;
      border: none;
      cursor: pointer;
      -webkit-appearance: none;
      background: #fff;
      outline: none;
      width: 80px;
      height: 30px;
      border-radius: 20px;
      box-shadow: 0 4px 6px -1px rgba($color: #e96907, $alpha: 1);
    }

    input[type="checkbox"]:before {
      content: "";
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 20px;
      top: 0;
      left: 0;
      background: #6894ab;
      transform: scale(1.1);
      transition: 0.7s ease all;
      box-shadow: 0 4px 6px -1px rgba($color: #e96907, $alpha: 1);
    }

    input:checked[type="checkbox"]:before {
      background: #3aef08;
      left: 52px;
    }
  }
}
</style>
