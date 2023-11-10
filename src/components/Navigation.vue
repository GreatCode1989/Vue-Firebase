<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link class="header" :to="{ name: 'home' }"
          >FireBlogs</router-link
        >
      </div>
      <div class="nav-links">
        <ul v-show="!mobile">
          <router-link class="link" :to="{name: 'home'}">Home</router-link>
          <router-link class="link" :to="{name: 'blogs'}">Blogs</router-link>
          <router-link class="link" :to="{name: 'newPost'}">Create Post</router-link>
          <router-link class="link" :to="{name: 'login'}">Login/Reister</router-link>
        </ul>
      </div>
    </nav>
    <img
      class="menu-icon"
      @click="toogleMobileNav"
      v-show="mobile"
      src="../assets/Icons/bars-regular.png"
      alt=""
    />
    <transition class="mobile-bar" name="mobile-nav">
      <ul v-show="mobileNav">
        <router-link class="link" :to="{name: 'home'}">Home</router-link>
        <router-link class="link" :to="{name: 'blogs'}">Blogs</router-link>
        <router-link class="link" :to="{name: 'newPost'}">Create Post</router-link>
        <router-link class="link" :to="{name: 'login'}">Login/Reister</router-link>
      </ul>
    </transition>
  </header>
</template>

<script>
export default {
  name: "navigation",
  components: {},

  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 767) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },

    toogleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: aliceblue;
  padding: 0 25px;
  box-shadow: 0 4px 6px -1px rgba($color: #e96907, $alpha: 1);
  z-index: 99;

  .link {
    font-weight: 500;
    padding: 0 8px;
    transition: 0.3s color ease;

    &:hover {
      color: rgb(54, 198, 198);
    }
  }
}

nav {
  display: flex;
  padding: 25px 0;

  .branding {
    display: flex;
    align-items: center;

    .header {
      font-weight: 700;
      font-size: 28px;
      text-decoration: none;
      color: #e96907;
    }
  }
  .nav-links {
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;

    ul {
      margin-right: 32px;

      .link {
        margin-right: 32px;
      }

      .link:last-child {
        margin-right: 0;
      }
    }
  }
}

.menu-icon {
  cursor: pointer;
  position: absolute;
  top: 32px;
  right: 25px;
  height: 25px;
  width: auto;
}

.mobile-bar {
  padding: 20px;
  width: 70%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  background-color: #ebaa78;
  top: 0;
  left: 0;

  .link {
    padding: 15px 0;
    color: antiquewhite;
  }
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 1s ease;
}

.mobile-nav-enter-active {
  transform: translateX(-250px); /* Начальное состояние - смещено влево */
}

.mobile-nav-enter-to {
  transform: translateX(0); /* Конечное состояние - возврат в исходное положение */
}

.mobile-nav-leave-to {
  transform: translateX(-250px); /* Конечное состояние при выходе - смещение влево */
}

</style>
