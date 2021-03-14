<template>
    <div class="header-wrapper">
        <md-app>
            <md-app-toolbar class="md-small">
                <div class="md-toolbar-row">
                    <!-- <div class="md-toolbar-section-start">
                    <md-button class="md-icon-button">
                        <md-icon>menu</md-icon>
                    </md-button>

                    <span class="md-title">My Title</span>
                    </div> -->

                    <div class="md-toolbar-section-end">
                    <md-button class="md-icon-button">
                        <md-icon>more_vert</md-icon>
                    </md-button>
                    </div>
                </div>
            </md-app-toolbar>
        </md-app>
    </div>
</template>

<script>

export default {
  name: 'Header',
  props: {},
  data() {
    return {}
  }
}
</script>

<style lang="scss">
  .header-wrapper {
    background: #fff;
    display: grid;

    .md-app-toolbar {
      background: #edf5f5;
    }
  }
</style>
