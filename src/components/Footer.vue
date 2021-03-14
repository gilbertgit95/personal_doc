<template>
    <div class="footer-wrapper">
        <md-app>
            <md-app-toolbar class="md-small">
                <div class="md-toolbar-row">
                    <div class="md-toolbar-section-start">
                      Footer Start
                    </div>

                    <div class="md-toolbar-section-end">
                      gilbert@gilbert.gmail.com
                    </div>
                </div>
            </md-app-toolbar>
        </md-app>
    </div>
</template>

<script>

export default {
  name: 'Footer',
  props: {},
  data() {
    return {}
  }
}
</script>

<style lang="scss">
  .footer-wrapper {
    background: #fff;
    display: grid;

    .md-app-toolbar {
      background: #edf5f5;
    }
  }
</style>
