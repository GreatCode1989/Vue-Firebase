<template>
  <div class="reset-password">
    <div class="form-wrap">
      <form class="reset">
        
        <h2>Reset Password</h2>
        <p>Forgot your password? Enter your email to resset it</p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email" />
            <img src="../assets/Icons/envelope.png" alt="" />
          </div>
        </div>
        <button>Reset</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForgotPassword",
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
