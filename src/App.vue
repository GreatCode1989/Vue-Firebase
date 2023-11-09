<template>
  <div class="app-wrapper">
    <div class="app">
      <Navigation />

      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: { Navigation, Footer },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

.link-light {
  color: #fff;
}

.arrow {
  margin-left: 8px;
  width: 12px;
  &:hover {
    color: #fff;
  }
}

.arrow-light {
  &:hover {
    color: #fff;
  }
}

button,
.router-button {
  transition: 500ms ease all ;
  cursor: pointer;
  margin-top: 24px;
  padding: 12px 24px;
  background-color: rgb(156, 111, 162);
  color: #fff;
  border-radius: 20px;
  border: none;
  text-transform: uppercase;
  text-decoration: none;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: rgb(38, 179, 234);
  }
}

.blog-card-wrap {
  position: relative;
  padding: 80px 16px;
  background-color: aliceblue;
  @media (min-width: 500px) {
    padding: 100px 16px;
  }

  .blog-cards {
    display: grid;
    gap: 32;
    grid-template-columns: 1fr;
    @media (min-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
