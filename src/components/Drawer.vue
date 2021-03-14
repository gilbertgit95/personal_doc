<template>
  <div class="drawer-wrapper">
    <md-app>
      <md-app-drawer :md-active.sync="layout.drawerIsOpen" md-persistent="mini">
        <md-toolbar class="md-transparent drawer-header" md-elevation="0">
          <!-- optional navigation header -->
          <span
            v-if="layout.drawerIsOpen"
            class="nav-header">{{ navTitle }}</span>

          <!-- toggle -->
          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon class="drawer-header-icon" v-if="layout.drawerIsOpen">keyboard_arrow_left</md-icon>
              <md-icon class="drawer-header-icon" v-else>keyboard_arrow_right</md-icon>
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
                  <span v-show="layout.drawerIsOpen" class="title-label">{{ item.label }}</span>
                </div>
              </md-list-item>
            </template>

            <!-- if item is navigation -->
            <template v-else>
              <!-- if contains subroutes -->
              <template v-if="Boolean(item.subRoutes)">
                <md-list-item
                  md-expand
                  :key="index + '_navItem'">
                  <md-icon>{{ item.icon }}</md-icon>
                  <span class="md-list-item-text">{{ item.label }}</span>

                  <!-- subroutes -->
                  <md-list slot="md-expand">
                    <md-list-item
                      class="md-inset"
                      :class="{
                        'active-nav': routesStatus[index].subRoutes[subIndex].isActive
                      }"
                      :title="item.label + ' -> ' + subItem.label"
                      :key="item.label + subItem.label + subIndex"
                      v-for="(subItem, subIndex) in item.subRoutes"
                      @click="setSelectionIndex(index, subIndex)"
                      :to="subItem.route">
                      <span class="md-sublist-item-text">{{ subItem.label }}</span>
                    </md-list-item>
                  </md-list>
                </md-list-item>
              </template>

              <!-- if no subroutes -->
              <template v-else>
                <md-list-item
                  :to="item.route"
                  :title="item.label"
                  :class="{
                    'active-nav': routesStatus[index].isActive
                  }"
                  @click="setSelectionIndex(index, null)"
                  :key="index + '_navItem'">
                  <md-icon>{{ item.icon }}</md-icon>
                  <span class="md-list-item-text">{{ item.label }}</span>
                </md-list-item>
              </template>
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
  props: ['navTitle', 'navigations'],
  data: () => ({
      mainRouteSelectionIndex: null,
      subRouteSelectionIndex: null
  }),
  methods: {
    toggleMenu() {
      this.$store.commit('toggleDrawer')
    },

    setSelectionIndex(mainIRouteIndex, subRouteIndex) {
      this.mainRouteSelectionIndex = mainIRouteIndex
      this.subRouteSelectionIndex = subRouteIndex
    }
  },

  computed: {
    layout() {
      return this.$store.getters.layout
    },
    routesStatus() {
      let navs = this.navigations
      let mainRouteSelection = this.mainRouteSelectionIndex
      let subRouteSelection = this.subRouteSelectionIndex
      let menuVisible = this.layout.drawerIsOpen

      // for main routes
      return navs.map((item, index) => {
        let navsStatus = {
          isActive: menuVisible && (index == mainRouteSelection),
        }
        // generate status for sub routes
        if (item.subRoutes) {
          navsStatus.subRoutes = item.subRoutes.map((subItem, subIndex) => {
            return {
              isActive: menuVisible && (index == mainRouteSelection) && (subIndex == subRouteSelection)
            }
          })
        }
        return navsStatus
      })
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

  .md-app-drawer {
    background: #62ad89;
  }

  .md-list {
    background: transparent;
  }

  .md-app-side-drawer {
    box-shadow: 2px 0px 7px 3px rgb(0 0 0 / 13%)!important;
    // .drawer-header {
    //   background: #4a5573;
    //   color: #fff;
    //   .drawer-header-icon {
    //     color: #fff;
    //   }
    // }
  }

  .list-item-title {
    color: #aef7d2;
    font-size: 13px;
    .title-icon {
      font-size: 15px !important;
      color: inherit !important;
    }
    .title-label {
      padding-left: 10px;
    }
  }

  .active-nav {
    background: #dee5f9;
  }

  .md-list-item-text {
    color: #000;
  }
  .md-sublist-item-text {
    color: #4a5573;
    overflow: hidden;
    text-overflow: ellipsis;

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
