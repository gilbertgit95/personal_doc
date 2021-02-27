<template>
  <div class="root-layout-wrapper">
    <!-- header section -->
    <div v-if="this.$store.getters.layout.header">
      header
    </div>

    <!-- drawer section -->
    <div v-if="this.$store.getters.layout.drawer">
      <Drawer />
    </div>

    <!-- the children routes view -->
    <router-view></router-view>

    <!-- footer section -->
    <div v-if="this.$store.getters.layout.footer">
      footer
    </div>
  </div>
</template>

<script>
import Drawer from '@/components/Drawer'

export default {
  name: 'RootLayout',
  props: {},
  components: {Drawer},
  // when a component is created
  // set all nessesary settings
  created() {
    // set active layout
    this.$store.commit('setActiveLayout', 'rootLayout')

    // set drawer status
    this.$store.commit('setDrawer', false)

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
