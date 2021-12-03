<template>
  <v-row>
    <v-col cols="3"></v-col>
    <v-col cols="6">
      <v-layout column>
        <v-flex xs6 offest-xs3>
          <div class="white elevation-2">
            <v-toolbar flat dense class="success" dark>
              <v-toolbar-title>Register</v-toolbar-title>
            </v-toolbar>
            <div class="pl-4 pr-4 pt-2 pb-2">
              <v-form>
                <v-text-field label="Email" v-model="email"></v-text-field>
                <v-text-field
                  label="Password"
                  v-model="password"
                ></v-text-field>
                <div v-if="error">
                  <span class="err">{{ error }}</span>
                  <br />
                </div>
                <v-btn class="success" @click="register">Register</v-btn>
              </v-form>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-col>
  </v-row>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async register() {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password,
        });
        this.error = null;
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.err {
  color: #ff0000;
}
</style>
