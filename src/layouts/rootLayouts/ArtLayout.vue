<template>
    <div class="art-layout-wrapper">
        <div class="content">
            <div class="md-display-1">
                Sketches Exhibit
            </div>
            <div class="md-caption">
                This are sketches I did not lost so far. The theme are mostly triggered bai emotion at
                the time of creation. Thank you for visiting the page, hope you enjoy my way of portraying things.
            </div>
        </div>

        <router-view></router-view>
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
    .art-layout-wrapper {
        padding: 10px;

        .content {
            max-width: 800px;
            margin: auto;
            margin-top: 20px;
            margin-bottom: 50px;
        }
    }
</style>