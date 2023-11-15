<template>
  <div class="form-wrap">
    <form class="register">
      <p class="login-register">
        Already have an account?
        <router-link class="router-link" :to="{ name: 'login' }">
          Login
        </router-link>
      </p>
      <router-link :to="{ name: 'home' }" style="text-decoration: none"
        ><h2>Create Your FireBlog Account</h2></router-link
      >
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
        <div v-show="error" class="error">{{ this.errorMsg }}</div>
      </div>
      <button @click.prevent="register">Sign Up</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>

import firebase from "firebase/app";
import 'firebase/auth';
import db from "../firebase/firebaseInit";
export default {
  name: "Register",
 
  data() {
    return {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      error: null,
      errorMsg: "",
    };
  },
  methods: {
    async register() {
  try {
    if (
      this.email !== "" &&
      this.password !== "" &&
      this.firstName !== "" &&
      this.lastName !== "" &&
      this.userName !== ""
    ) {
      this.error = false;
      this.errorMsg = "";
      const firebaseAuth = await firebase.auth();
      const createUser = await firebaseAuth.createUserWithEmailAndPassword(this.email, this.password);
      const result = await createUser;
      const dataBase = db.collection("users").doc(result.user.uid);
      await dataBase.set({
        firstName: this.firstName,
        lastName: this.lastName,
        userName: this.userName,
        email: this.email,
      });
      this.$router.push({ name: "home" });
      return;
    }
    this.error = true;
    this.errorMsg = "Please fill out all the fields!";
  } catch (error) {
    
    
    this.error = true;
    this.errorMsg = error.message
  }
},

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
