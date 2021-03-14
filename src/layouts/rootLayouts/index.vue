<template>
  <div class="root-layout-wrapper">
    <!-- header section -->
    <div v-if="this.$store.getters.layout.header">
      header
    </div>

    <!-- drawer section -->
    <div v-if="this.$store.getters.layout.drawer">
      <Drawer :nav-title="navTitle" :navigations="navigations" />
    </div>

    <!-- the children routes view -->
    <div class="main-router-view" :class="this.$store.getters.layout.drawerIsOpen? 'small': 'big'">
        <router-view></router-view>
    </div>

    <!-- footer section -->
    <div v-if="this.$store.getters.layout.footer">
      footer
    </div>
  </div>
</template>

<script>
import Drawer from '@/components/Drawer'
import DrawerConsts from '@/constants/root/drawer'

export default {
  name: 'RootLayout',
  props: {},
  data() {
    return {
      navTitle: DrawerConsts.navTitle,
      navigations: DrawerConsts.navigations
    }
  },
  components: {Drawer},
  // when a component is created
  // set all nessesary settings
  created() {
    // set active layout
    this.$store.commit('setActiveLayout', 'rootLayout')

    // set drawer status
    this.$store.commit('setDrawer', true)

    // set layout visible sections
    this.$store.commit('setlayout', {
      drawer: true,
      header: true,
      footer: true
    })
  }
}
</script>

<style lang="scss" scoped>
  .root-layout-wrapper {
    background: #fff;

    .main-router-view {
      &.small {
        padding-left: 230px;
      }
      &.big {
        padding-left: 70px;
      }
    }
  }
</style>
