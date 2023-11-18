<template>
  <div class="admin">
    <div class="container">
      <h2>Administration</h2>
      <div class="admin-info">
        <h2>Add Admin</h2>
        <div class="input">
          <input
            type="text"
            placeholder="Enter user email to make them an admin"
            id="addAdmins"
            v-model="adminEmail"
          />
        </div>
        <span>{{ this.functionMsg }}</span>
        <button class="button">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "Admin",
  data() {
    return {
      functionMsg: null,
      adminEmail: "",
    };
  },
  methods: {
    async addAdmin() {
      const addAdmin = await firebase.functions().httpsCallable("addAdminRole");
      const result = await addAdmin({ email: this.adminEmail });
      this.functionMsg = result.data.message;
    },
  },
};
</script>

<style lang="scss" scoped>
.admin {
  .container {
    max-width: 1000px;
    padding: 60px 25px;

    h2 {
      text-align: center;
      margin-bottom: 16px;
      font-size: 32px;
      font-weight: 300;
    }

    .admin-info {
      border-radius: 8px;
      padding: 32px;
      box-shadow: 0 4px 6px -1px rgba($color: #e96907, $alpha: 1);
      display: flex;
      flex-direction: column;
      max-width: 600px;
      margin: 32px auto;
      background-color: #f6efef;

      span {
        font-size: 14px;
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
