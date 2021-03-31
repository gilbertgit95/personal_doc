<template>
    <div class="pets-wrapper">
        <div class="pets-content">
            Pets
        </div>
    </div>
</template>

<script>

export default {
    name: 'Pets',
    props: [],
    data() {
        return {
        }
    },
    created() {
    },
    methods: {
    }
}
</script>

<style lang="scss">
    .pets-wrapper {
        b {
            color: #33bf7c;
        }

        .desc {
            text-indent: 50px;
            margin-top: 10px;
        }

        .pets-content {
            width: 80%;
            margin: auto;
            padding: 10px;
            padding-top: 30px;
            min-width: 500px;
            max-width: 700px;
        }
    }
</style>
