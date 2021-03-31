<template>
    <div class="tank-filler-intro-wrapper">
        <div class="md-headline tank-filler-intro-divider title-heading" style="margin-bottom: 10px;">Intro</div>
    </div>
</template>

<script>

export default {
    name: 'TankFillerIntro',
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

    .tank-filler-intro-wrapper {
        .title-heading {
            color: $color;
        }

        .tank-filler-intro-divider {
            margin: auto;
            max-width: 800px;
        }
    }
</style>
