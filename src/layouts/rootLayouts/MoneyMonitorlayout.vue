<template>
    <div class="money-monitor-layout-wrapper">
        <div class="content">
            <div class="md-display-1" style="margin-bottom: 10px;">
                Money Monitor
            </div>
            <div class="md-body-1"></div>
        </div>

        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'MoneyMonitorLayout',
    data() {
        return {}
    }
}
</script>

<style lang="scss">
    $color: rgb(61, 155, 155);

    .money-monitor-layout-wrapper {
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