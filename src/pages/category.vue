<template>
  <div class="mt-20">

    <div class="min-h-screen min-w-screen bg-gray-100 flex flex-wrap justify-center space-x-3">
    <div v-for="cat in cats" :key="cat.id">
      {{id}}
        <div>
          <div class="flex flex-col max-w-md bg-white px-8 py-6 rounded-xl space-y-5 items-center">
            <h3 class="font-serif font-bold text-gray-900 text-xl">{{ cat.id }}</h3>
            <img class="w-full rounded-md" :src="cat.url" alt="motivation" />
          </div>
        </div>
      </div>
  </div>
  <button class="bg-black text-white p-3" @click="addPage()">Load more</button>
  </div>
</template>

<script>
// import category from "../components/category";

export default {
  name: "category",
  components: {
    // category
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    cats() {
      return this.$store.state.cats
    }
  },
  data(){
    return {
      page: 1
    }
  },
  watch: {
    id(){
      this.$store.dispatch("getCats", this.id, this.page);
    },
    page() {
      this.$store.dispatch("addMore", this.page)
    }
  },
  methods: {
    addPage() {
      this.page += 1
      console.log(this.page)

    }
  }
}
</script>

<style scoped>

</style>