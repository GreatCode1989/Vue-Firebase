<template>
  <div class="reset-password">
    <Modal
      v-if="modalActive"
      :modalMessage="modalMessage"
      @close-modal="closeModal"
    />
    <Loading v-if="loading" />
    <div class="form-wrap">
      <form class="reset">
        <p class="login-register">
          Back to
          <router-link class="router-link" :to="{ name: 'login' }">
            Login
          </router-link>
        </p>
        <h2>Reset Password</h2>

        <p>Forgot your password? Enter your email to resset it</p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email" />
            <img src="../assets/Icons/envelope.png" alt="" />
          </div>
        </div>
        <button @click.prevent="resetPassword">Reset</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue";
import Modal from "../components/Modal.vue";
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "ForgotPassword",
  data() {
    return {
      email: "",
      modalActive: false,
      modalMessage: "",
      loading: null,
    };
  },
  components: {
    Modal,
    Loading,
  },
  methods: {
    resetPassword() {
      this.loading = true;
      firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(() => {
          this.modalMessage = "If your account exists, you wiil receive a mail";
          this.loading = false;
          this.modalActive = true;
          this.loading = false;
        })
        .catch((err) => {
          this.modalMessage = err.message;
          this.modalActive = true;
          this.loading = false;
        });
    },
    closeModal() {
      this.modalActive = !this.modalActive;
      this.email = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.reset-password {
  position: relative;
  .form-wrap {
    .reset {
      h2 {
        margin-bottom: 8px;
      }
      p {
        text-align: center;
        margin-bottom: 32px;
      }
    }
  }
}
</style>
