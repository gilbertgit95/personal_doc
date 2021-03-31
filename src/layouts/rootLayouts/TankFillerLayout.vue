<template>
    <div class="tank-filler-layout-wrapper">
        <div class="content">
            <div class="md-display-1" style="margin-bottom: 10px;">
                Tank Filler
            </div>
            <div class="md-body-1">
            </div>
        </div>

        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'TankFillerLayout',
    data() {
        return {}
    }
}
</script>

<style lang="scss">
    $color: rgb(61, 155, 155);

    .tank-filler-layout-wrapper {
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