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
                <div class="list-item-title">
                  <md-icon class="title-icon">{{ item.icon }}</md-icon>
                  <span v-show="menuVisible" class="title-label">{{ item.label }}</span>
                </div>
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
      navTitle: 'My Portfolio',
      navigations: [
        {
          type: 'navTitle',
          label: 'Personal Data',
          icon: 'perm_identity'
        },
        {
          type: 'navItem',
          label: 'Resume',
          icon: 'file_present',
          route: '/'
        },
        {
          type: 'navTitle',
          label: 'Hobbies',
          icon: 'stars',
          route: '/'
        },
        {
          type: 'navItem',
          label: 'Art',
          icon: 'brush',
          route: '/'
        },
        {
          type: 'navItem',
          label: 'Aquarium',
          icon: 'auto_awesome',
          route: '/'
        },
        {
          type: 'navItem',
          label: '3D Printing',
          icon: 'print',
          route: '/'
        },
        {
          type: 'navTitle',
          label: 'Projects Documentation',
          icon: 'widgets'
        },
        {
          type: 'navItem',
          label: 'Tank Filler',
          icon: 'gradient',
          route: '/'
        },
        {
          type: 'navItem',
          label: 'Money Monitor',
          icon: 'bar_chart',
          route: '/'
        },
        {
          type: 'navItem',
          label: 'Future Project',
          icon: 'access_time',
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

  .list-item-title {
    color: rgb(189, 186, 186);
    font-size: 13px;
    .title-icon {
      font-size: 15px !important;
      color: inherit !important;
    }
    .title-label {
      padding-left: 10px;
    }
  }

  .md-list-item-text {
    color: gray;
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
