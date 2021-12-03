<template>
  <div id="app">
    <v-app>
      <page-header />
      <main class="mt-16">
        <v-container>
          <router-view></router-view>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
import PageHeader from "./components/Header.vue";
export default {
  name: "App",
  components: {
    PageHeader,
  },
};
</script>

<style lang="scss">
body {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
</style>
