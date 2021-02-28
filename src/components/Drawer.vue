<template>
  <div class="drawer-wrapper">
    <md-app>
      <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini">
        <md-toolbar class="md-transparent" md-elevation="0">
          <!-- <span v-if="menuVisible">Opt Nav Title</span> -->

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon v-if="menuVisible">keyboard_arrow_left</md-icon>
              <md-icon v-else>keyboard_arrow_right</md-icon>
            </md-button>
          </div>
        </md-toolbar>
        

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>
    </md-app>
  </div>
</template>

<script>
export default {
  name: 'Drawer',
  props: [],
  data: () => ({
      menuVisible: false
    }),
    methods: {
      toggleMenu () {
        this.menuVisible = !this.menuVisible
      }
    }
}
</script>

<style lang="scss" scoped>
  .md-app {
    position: absolute;
    top: 0px;
    min-height: 100%;
  }

  .md-drawer.md-persistent-mini:not(.md-active) .md-toolbar {
    display: inline-block;
  }

  .md-drawer.md-persistent-mini {
    transform: translate3D(0,0,0);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>
