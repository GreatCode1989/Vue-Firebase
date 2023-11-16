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
          <router-link class="link" :to="{ name: 'home' }">Home</router-link>
          <router-link class="link" :to="{ name: 'blogs' }">Blogs</router-link>
          <router-link class="link" :to="{ name: 'newPost' }"
            >Create Post</router-link
          >
          <router-link v-if="!user" class="link" :to="{ name: 'login' }"
            >Login/Reister</router-link
          >
        </ul>

        <div
          v-if="user"
          @click="toggleProfileMenu"
          class="profile"
          ref="profile"
        >
          <span>{{ this.$store.state.profileInitials }}</span>
          <div v-show="profileMenu" class="profile-menu">
            <div class="info">
              <p class="initials">{{ this.$store.state.profileInitials }}</p>
              <div class="right">
                <p>
                  {{ this.$store.state.profileFirstName }}
                  {{ this.$store.state.profileLastName }}
                </p>
                <p>{{ this.$store.state.profileUserName }}</p>
                <p>{{ this.$store.state.profileEmail }}</p>
              </div>
            </div>
            <div class="options">
              <div class="option">
                <router-link class="option" :to="{ name: 'profile' }">
                  <img class="icon" src="../assets/Icons/user.jpg" alt="" />
                  <p>Profile</p></router-link
                >
              </div>
              <div class="option">
                <router-link class="option" :to="{ name: 'admin' }">
                  <img class="icon" src="../assets/Icons/admin.png" alt="" />
                  <p>Admin</p></router-link
                >
              </div>
              <div @click="signOut" class="option">
                <img class="icon" src="../assets/Icons/out.png" alt="" />
                <p>Sign Out</p>
              </div>
            </div>
          </div>
        </div>
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
        <router-link class="link" :to="{ name: 'home' }">Home</router-link>
        <router-link class="link" :to="{ name: 'blogs' }">Blogs</router-link>
        <router-link class="link" :to="{ name: 'newPost' }"
          >Create Post</router-link
        >
        <router-link v-if="!user" class="link" :to="{ name: 'login' }"
          >Login/Reister</router-link
        >
      </ul>
    </transition>
  </header>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "navigation",
  components: {},

  data() {
    return {
      profileMenu: null,
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

    toggleProfileMenu(e) {
      if (this.$refs.profile && this.$refs.profile.contains(e.target)) {
        this.profileMenu = !this.profileMenu;
      } else {
        this.profileMenu = false;
      }
    },

    signOut() {
      firebase.auth().signOut();
      window.location.reload();
    },
  },

  computed: {
    user() {
      return this.$store.state.user;
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

    .profile {
      position: relative;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      color: #fff;
      background-color: #e96907;

      span {
        pointer-events: none;
      }

      .profile-menu {
        position: absolute;
        top: 60px;
        right: 0;
        width: 250px;
        background-color: #c6b5a9;
        box-shadow: 0 4px 6px -1px rgba($color: #e96907, $alpha: 1);

        .info {
          display: flex;
          align-items: center;
          padding: 15px;
          border-bottom: 1px solid #fff;

          .initials {
            position: initial;
            width: 40px;
            height: 40px;
            display: flex;
            color: #fff;
            background-color: #ebaa78;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
          }

          .right {
            flex: 1;
            margin-left: 24px;

            p:nth-child(1) {
              font-size: 14px;
            }

            p:nth-child(2),
            p:nth-child(3) {
              font-size: 12px;
            }
          }
        }

        .options {
          padding: 15px;
          .option {
            text-decoration: none;
            color: #fff;
            display: flex;
            align-items: center;
            margin-bottom: 12px;

            .icon {
              width: 15px;
              height: auto;
            }

            p {
              font-size: 14px;
              margin-left: 12px;
            }

            &:last-child {
              margin-bottom: 0px;
            }
          }
        }
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
  transform: translateX(
    0
  ); /* Конечное состояние - возврат в исходное положение */
}

.mobile-nav-leave-to {
  transform: translateX(
    -250px
  ); /* Конечное состояние при выходе - смещение влево */
}
</style>
