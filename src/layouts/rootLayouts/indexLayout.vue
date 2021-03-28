<template>
  <div class="root-layout-wrapper">
    <!-- header section -->
    <div v-if="this.$store.getters.layout.header">
      <div class="layout" :class="this.$store.getters.layout.drawerIsOpen? 'small': 'big'">
        <Header />
      </div>
    </div>

    <!-- drawer section -->
    <div v-if="this.$store.getters.layout.drawer">
      <Drawer :nav-title="navTitle" :navigations="navigations" />
    </div>

    <!-- the children routes view -->
    <div
      class="layout .main-router-view"
      :class="{
        'small': this.$store.getters.layout.drawerIsOpen,
        'big': !this.$store.getters.layout.drawerIsOpen
      }">
      <transition name="fade" mode="out-in">
          <router-view></router-view>
      </transition>
    </div>

    <!-- footer section -->
    <div v-if="this.$store.getters.layout.footer">
      <div class="layout" :class="this.$store.getters.layout.drawerIsOpen? 'small': 'big'">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Drawer from '@/components/Drawer'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
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
  components: {Drawer, Header, Footer},
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
      header: false,
      footer: false
    })
  }
}
</script>

<style lang="scss">
  .fade-enter-active,
  .fade-leave-active {
      transition: opacity 0.5s;
  }

  .fade-enter,
  .fade-leave-to {
      opacity: 0;
  }
  .root-layout-wrapper {
    background: #fff;
    display: grid;

    .md-app-toolbar {
      background: #edf5f5;
    }

    .small {
        padding-left: 230px;
    }
    .big {
      padding-left: 70px;
    }

    .layout {
      width: 100%;
      transition: padding-left 0.16s;
    }

    .main-router-view {
      
    }
  }
</style>
