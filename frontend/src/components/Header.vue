<template>
  <v-app-bar app class="success" fixed dark>
    <v-toolbar-title class="mr-4 home">
      <router-link to="/">TabTracker</router-link>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn text>Browse</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn text>
        <router-link to="/login">Login</router-link>
      </v-btn>
      <v-btn text>
        <router-link to="/register">Register</router-link>
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style>
.v-application a {
  color: #fff !important;
  height: 100% !important;
  width: 100% !important;
  text-decoration: none;
}
</style>
