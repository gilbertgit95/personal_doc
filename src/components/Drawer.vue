<template>
  <div class="drawer-wrapper">
    <md-app>
      <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini">
        <md-toolbar class="md-transparent" md-elevation="0">
          <!-- optional navigation header -->
          <span
            v-if="menuVisible"
            class="nav-header">{{ navTitle }}</span>

          <!-- toggle -->
          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon v-if="menuVisible">keyboard_arrow_left</md-icon>
              <md-icon v-else>keyboard_arrow_right</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list>
          <!-- loop all navifations list -->
          <template
            v-for="(item, index) in navigations">

            <!-- if item is navifation title -->
            <template v-if="item.type == 'navTitle'">
              <md-divider :key="index + '_navDivider'"></md-divider>
              <md-list-item
                disabled
                :key="index + '_navItem'">
                <md-icon>{{ item.icon }}</md-icon>
                <span class="md-list-item-text">{{ item.label }} Group</span>
              </md-list-item>
            </template>

            <!-- if item is navigation -->
            <template v-else>
              <md-list-item
                :to="item.route"
                :key="index + '_navItem'">
                <md-icon>{{ item.icon }}</md-icon>
                <span class="md-list-item-text">{{ item.label }}</span>
              </md-list-item>
            </template>
          </template>

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
      menuVisible: false,
      navTitle: 'navigation',
      navigations: [
        {
          type: 'navTitle',
          label: 'Main Menu',
          icon: 'menu'
        },
        {
          type: 'navItem',
          label: 'route 1',
          icon: 'move_to_inbox',
          route: '/'
        },
        {
          type: 'navItem',
          label: 'route 2',
          icon: 'move_to_inbox',
          route: '/'
        },
        {
          type: 'navItem',
          label: 'route 3',
          icon: 'send',
          route: '/'
        },
        {
          type: 'navTitle',
          label: 'Secondary Menu',
          icon: 'menu'
        },
        {
          type: 'navItem',
          label: 'route A1',
          icon: 'send',
          route: '/'
        },
        {
          type: 'navItem',
          label: 'route A2',
          icon: 'delete',
          route: '/'
        }
      ],
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

  .nav-header {
    position: absolute;
    min-width: 0px;
    overflow: hidden;
  }

  .md-drawer.md-persistent-mini:not(.md-active) .md-toolbar {
    display: flex;
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
