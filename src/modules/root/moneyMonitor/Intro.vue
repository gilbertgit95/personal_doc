<template>
    <div class="money-monitor-intro-wrapper">
        <div class="md-headline money-monitor-intro-divider title-heading" style="margin-bottom: 10px;">Money Monitor Intro</div>
    </div>
</template>

<script>

export default {
    name: 'MoneyMonitorIntro',
    props: [],
    data() {
        return {}
    },
    created() {
    },
    methods: {}
}
</script>

<style lang="scss">
    $color: rgb(61, 155, 155);

    .money-monitor-intro-wrapper {
        .title-heading {
            color: $color;
        }

        .money-monitor-intro-divider {
            margin: auto;
            max-width: 800px;
        }
    }
</style>
