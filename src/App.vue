<template>
  <div class="flex">
    <sidebar />
    <router-view></router-view>
  </div>
</template>

<script>
import sidebar from "./components/sidebar";
export default {
  name: 'App',
  components: {
    sidebar,
  }
}
</script>

<style>

</style>
