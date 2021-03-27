<template>
    <div class="art-layout-wrapper">
        <div></div>

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
    }
</style>