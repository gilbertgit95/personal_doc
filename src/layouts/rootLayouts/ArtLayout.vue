<template>
    <div class="art-layout-wrapper">
        <div class="content">
            <div class="md-display-1" style="margin-bottom: 10px;">
                Art Exhibit
            </div>
            <div class="md-body-1">
                This are the portraits I did not lost so far. The theme are mostly based on emotion and real events at
                the time of creation. Thank you for visiting the page, hope you enjoy my way of portraying things.
            </div>
        </div>

        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'ArtLayout',
    data() {
        return {}
    }
}
</script>

<style lang="scss">
    $color: rgb(61, 155, 155);

    .art-layout-wrapper {
        padding: 10px;

        .content {
            max-width: 800px;
            margin: auto;
            margin-top: 20px;
            margin-bottom: 50px;

            .md-display-1 {
                color: $color;
            }
        }
    }
</style>