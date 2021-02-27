<template>
  <div class="root-layout-wrapper">
    <!-- header section -->
    <div>
      header
    </div>

    <!-- drawer section -->
    <div>
      drawer
    </div>

    <!-- the children routes view -->
    <router-view></router-view>

    <!-- footer section -->
    <div>
      footer
    </div>
  </div>
</template>

<script>
export default {
  name: 'RootLayout',
  props: {},

  // when a component is created
  // set all nessesary settings
  created() {
    // set active layout
    this.$store.commit('setActiveLayout', 'rootLayout')

    // set layout visible sections
    this.$store.commit('setlayout', {
      drawer: true,
      header: true,
      footer: true
    })
  }
}
</script>

<style scoped>
</style>
