<template>
  <div class="profile">
    <Modal
      v-if="modalActive"
      :modalMessage="modalMessage"
      @close-modal="closeModal"
    />
    <div class="container">
      <h2>Account Setting</h2>
      <div class="profile-info">
        <div class="initials">
          {{ $store.state.profileInitials }}
        </div>
        <div class="admin-badge">
          <img class="icon" src="../assets/Icons/admin.png" alt="" />
          <span>admin</span>
        </div>
        <div class="input">
          <label for="firstName">First Name:</label>
          <input type="text" id="firstName" v-model="firstName" />
        </div>
        <div class="input">
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" v-model="lastName" />
        </div>
        <div class="input">
          <label for="userName">User Name:</label>
          <input type="text" id="userName" v-model="userName" />
        </div>
        <div class="input">
          <label for="email">Email</label>
          <input disabled type="text" id="email" v-model="email" />
        </div>
        <button @click="updateProfile">Save Change</button>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
export default {
  name: "Profile",
  components: {
    Modal,
  },
  data() {
    return {
      modalMessage: "Change were saved!",
      modalActive: null,
    };
  },
  methods: {
    updateProfile() {
      this.$store.dispatch("updateUserSetting");
      this.modalActive = !this.modalActive
    },
    closeModal() {
      this.modalActive = !this.modalActive;
    },
  },
  computed: {
    firstName: {
      get() {
        return this.$store.state.profileFirstName;
      },
      set(payload) {
        this.$store.commit("changeFirstName", payload);
      },
    },
    lastName: {
      get() {
        return this.$store.state.profileLastName;
      },
      set(payload) {
        this.$store.commit("changeLastName", payload);
      },
    },
    userName: {
      get() {
        return this.$store.state.profileUserName;
      },
      set(payload) {
        this.$store.commit("changeUserName", payload);
      },
    },
    email: {
      get() {
        return this.$store.state.profileEmail;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.profile {
  .container {
    max-width: 1000px;
    padding: 60px 25px;

    h2 {
      text-align: center;
      margin-bottom: 16px;
      font-weight: 300;
      font-size: 32px;
    }

    .profile-info {
      border-radius: 8px;
      box-shadow: 0 4px 6px -1px rgba($color: #e96907, $alpha: 1);
      padding: 32px;
      background-color: #f6efef;
      display: flex;
      flex-direction: column;
      max-width: 600px;
      margin: 32px auto;

      .initials {
        position: initial;
        width: 80px;
        height: 80px;
        font-size: 32px;
        background-color: #dfae86;
        color: #fff;
        display: flex;
        margin-bottom: 20px;
        align-self: center;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
      }

      .admin-badge {
        display: flex;
        align-self: center;
        color: #fff;
        font-size: 14px;
        padding: 8px 24px;
        border-radius: 8px;
        background-color: #dfae86;
        margin-top: 16px 0;
        text-align: center;
        text-transform: capitalize;
      }

      .icon {
        width: 14px;
        height: auto;
        margin-right: 8px;
      }

      .input {
        margin: 16px 0;

        label {
          font-size: 14px;
          display: block;
          padding-bottom: 6px;
        }
        input {
          width: 100%;
          border: none;
          background-color: #fff;
          padding: 8px;
          height: 50px;
          @media (min-width: 900px) {
          }

          &:focus {
            outline: none;
          }
        }
      }

      button {
        align-self: center;
      }
    }
  }
}
</style>
