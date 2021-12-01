<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="register">
      <input type="email" placeholder="Email" v-model="email" />
      <br /><br />
      <input type="password" placeholder="Password" v-model="password" />
      <br /><br />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      const res = await AuthenticationService.register({
        emial: this.email,
        password: this.password,
      });
      console.log(res.data);
    },
  },
};
</script>

<style></style>
