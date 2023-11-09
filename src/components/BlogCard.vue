<template>
  <div class="blog-card">
    <div class="icons">
      <img class="icon" src="../assets/Icons/edit.png" alt="" />
      <img class="icon" src="../assets/Icons/delete.png" alt="" />
    </div>
    <img
      class="photo"
      :src="require(`../assets/blogCards/${post.blogCoverPhoto}.jpg`)"
      alt=""
    />
    <div class="info">
      <h4>{{ post.blogTitle }}</h4>
      <h6>Posted on:{{ post.blogDate }}</h6>
      <router-link class="link" to="#">
        View The Post
        <img class="arrow" src="../assets/Icons/arrow.png" alt="" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "blogCard",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-card {
  position: relative;
  cursor: pointer;
  display: flex;
  margin: 25px;
  flex-direction: column;
  border-radius: 8px;
  background-color: #fff;
  min-height: 420px;
  transition: 0.5s ease all;

  &:hover {
    transform: rotateX(-5deg) scale(1.01);
    box-shadow: 0 4px 6px -1px rgba($color: #e96907, $alpha: 1);
  }

  .icons {
    display: flex;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 99;

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 35px;
      height: 35px;
      margin-right: 10px;
      border-radius: 50%;
      background-color: transparent;
      transition: 0.5s ease all;

      &:hover {
        background-color: rgb(255, 3, 171);
      }
    }
  }

  .photo {
    display: block;
    border-radius: 8px 8px 0 0;
    z-index: 1;
    width: 100%;
    min-height: 200px;
    object-fit: cover;
  }

  .info {
    display: flex;
    flex-direction: column;
    height: 100%;
    z-index: 3;
    padding: 32px 16px;
    color: rgb(22, 23, 23);

    h4 {
      padding-bottom: 8px;
      font-size: 20px;
      font-weight: 300;
    }

    h6 {
      font-weight: 400;
      font-size: 12px;
      padding-bottom: 16px;
    }

    .link {
      display: inline-flex;
      align-items: center;
      margin-top: auto;
      font-weight: 500;
      padding-top: 20px;
      font-size: 12px;
      padding-bottom: 4px;
      transition: 0.5s ease all;

      &:hover {
        color: rgb(15, 15, 255)
      }

      .arrow {
        width: 10px;
      }
    }
  }
}
</style>
