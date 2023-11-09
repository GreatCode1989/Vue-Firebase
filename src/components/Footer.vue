<template>
  <footer>

  <div class="container">
    <div class="left">
      <div class="col-1">
        <router-link class="header" :to="{ name: 'home' }"
          >FireBlogs</router-link
        >
        <ul>
          <li>
            <a href="#"
              ><img
                class="svg-icon"
                src="../assets/Icons/youtube.png"
                alt=""
            /></a>
          </li>
          <li>
            <a href="#"
              ><img
                class="svg-icon"
                src="../assets/Icons/twitter.png"
                alt=""
            /></a>
          </li>
          <li>
            <a href="#"
              ><img
                class="svg-icon"
                src="../assets/Icons/instagram.jpg"
                alt=""
            /></a>
          </li>
          <li>
            <a href="#"
              ><img
                class="svg-icon"
                src="../assets/Icons/linkedin.png"
                alt=""
            /></a>
          </li>
        </ul>
      </div>
      <div class="col-2">
        <ul>
          <router-link class="link" :to="{ name: 'home' }">Home</router-link>
          <router-link class="link" :to="{ name: 'blogs' }">Blogs</router-link>
          <router-link v-if="user" class="link" :to="{ name: 'newpost' }"
            >Create Post</router-link
          >
          <router-link v-if="!user" class="link" :to="{ name: 'login' }"
            >Login In/Register</router-link
          >
        </ul>
      </div>
    </div>
    <div class="right">
      <p>Copyright 2023 All Rights Reserved</p>
    </div>
  </div>
  </footer>
</template>

<script>
export default { name: "footer", components: {} };
</script>

<style lang="scss" scoped>
footer {
  margin-top: auto;
  padding: 100px 25px;
  background-color: rgb(151, 184, 184);

  .container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    @media (min-width: 800px) {
      flex-direction: row;
      gap: 0;
    }

    > div {
      display: flex;
      flex: 1;
    }

    .left {
      gap: 32px;
      color: aliceblue;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (min-width: 800px) {
        flex-direction: row;
        align-items: initial;
        gap: 0;
      }

      .header {
        text-align: center;
        font-size: 24px;
        color: aliceblue;
        margin-bottom: 16px;
        text-decoration: none;
        font-weight: 600;
        @media (min-width: 800px) {
          text-align: initial;
        }
      }

      ul {
        gap: 16px;
        list-style: none;
        display: flex;
      }

      .col-1,
      .col-2 {
        gap: 32px;
        display: flex;
        flex: 1;
        @media (min-width: 800px) {
          gap: 0;
        }
      }

      .col-1 {
        flex-direction: column;

        h2 {
          text-align: center;
          @media (min-width: 800px) {
            text-align: initial;
          }
        }

        ul {
          margin-top: auto;

          li {
            display: flex;
            align-items: center;

            
          }
        }
      }

      .col-2 {
        ul {
          height: 100%;
          justify-content: center;
          flex-direction: row;
          flex-wrap: wrap;
          @media (min-width: 800px) {
            flex-direction: column;
          }

          .link {
            font-size: 16px;
            font-weight: 500;
            color: antiquewhite;
            text-decoration: none;
          }
        }
      }
    }

    .right {
        gap: 32px;
        color:azure;
        align-items: center;
        flex-direction: column;
        @media (min-width: 800px) {
            align-items: flex-end;
            gap: 0;
        }
    }

    p {
        margin-top: auto;
    }
  }
  .svg-icon {
              width: 24px;
              height: auto;
              color: beige;
            }
}
</style>
