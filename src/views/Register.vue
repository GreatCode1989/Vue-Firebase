<template>
  <div class="form-wrap">
    <form class="register">
      <p class="login-register">
        Already have an account?
        <router-link class="router-link" :to="{ name: 'login' }">
          Login
        </router-link>
      </p>
      <h2>Create Your FireBlog Account</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="First Name" v-model="firstName" />
          <img src="../assets/Icons/user.jpg" alt="" />
        </div>
        <div class="input">
          <input type="text" placeholder="Last Name" v-model="lastName" />
          <img src="../assets/Icons/user.jpg" alt="" />
        </div>
        <div class="input">
          <input type="text" placeholder="Username" v-model="userName" />
          <img src="../assets/Icons/user.jpg" alt="" />
        </div>
        <div class="input">
          <input type="text" placeholder="Email" v-model="email" />
          <img src="../assets/Icons/envelope.png" alt="" />
        </div>
        <div class="input">
          <input type="password" placeholder="Password" v-model="password" />
          <img src="../assets/Icons/lock.jpg" alt="" />
        </div>
      </div>

      <button>Sign Up</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      firstName: null,
      lastName: null,
      userName: null,
      email: null,
      password: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.register {
  h2 {
    max-width: 350px;
  }
}
</style>
