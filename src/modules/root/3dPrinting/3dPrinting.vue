<template>
    <div class="Ed-printing-wrapper">
        <div class="Ed-printing-content">
            3d Printing content
        </div>
    </div>
</template>

<script>

export default {
    name: '3dprinting',
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
    .Ed-printing-wrapper {
        b {
            color: #33bf7c;
        }

        .desc {
            text-indent: 50px;
            margin-top: 10px;
        }

        .Ed-printing-content {
            width: 80%;
            margin: auto;
            padding: 10px;
            padding-top: 30px;
            min-width: 500px;
            max-width: 700px;
        }
    }
</style>
