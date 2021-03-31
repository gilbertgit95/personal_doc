<template>
    <div class="paintings-wrapper">
        <div class="md-headline painting-divider title-heading" style="margin-bottom: 10px;">Paintings</div>
        <div v-if="Boolean(paintings && paintings.length)">
            <template v-for="(painting, paintingIndex) in paintings">
                <md-divider :key="'painting-divider-' + paintingIndex" class="painting-divider"></md-divider>
                <div class="md-layout md-gutter painting"
                    :key="'painting_' + paintingIndex">
                    <div class="md-layout-item md-medium-size-50 md-xsmall-size-100">
                        <div class="desc">
                            <div class="md-title">{{ painting.title }}</div>
                            <div class="md-md-body-1">{{ painting.desc }}</div>

                            <div class="painting-footer">
                                <div class="md-md-caption">Date: {{ painting.date }}</div>
                                <div class="md-md-caption">Artist: {{ painting.artist }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="md-layout-item md-medium-size-50 md-xsmall-size-100">
                        <div class="images">
                            <img
                                width="400"
                                v-if="painting && painting.photos && painting.photos[0]"
                                :src="painting.photos[0]" />
                        </div>
                    </div>
                </div>
            </template>
        </div>
        <div v-else>
            <md-divider class="painting-divider"></md-divider>
            <div class="painting" style="text-align: center; color: #aaa;">Empty content</div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Paintings',
    props: [],
    data() {
        return {
            paintings: undefined
        }
    },
    created() {
        // fetch contetn data
        axios.get('/files/root/interests/art/paintings/paintings.json')
            .then(res => {
                this.paintings = res.data.paintings
                    .sort((a, b) => {
                        // return 
                        if (a.formatedDate < b.formatedDate) {
                            return 1
                        } else {
                            if (a.formatedDate == b.formatedDate) {
                                return 0
                            } else {
                                return -1
                            }
                        }
                    })
            })
            .catch(() => {
                // do nothing
            })
    },
    methods: {
        isEven(num) {
            return (num % 2) == 0
        }
    }
}
</script>

<style lang="scss">
    $color: rgb(61, 155, 155);

    .paintings-wrapper {
        .title-heading {
            color: $color;
        }

        .painting {
            margin: auto;
            margin-bottom: 25px;
            margin-top: 25px;
            max-width: 800px;
            .desc {
                padding: 5px;
                >div {
                    margin-bottom: 15px;
                }
            }

            .images {
                padding: 5px;
            }

            .painting-footer{
                color: $color
            }
        }

        .painting-divider {
            margin: auto;
            max-width: 800px;
        }
    }
</style>
