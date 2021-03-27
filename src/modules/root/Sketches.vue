<template>
    <div class="sketches-wrapper">
        <div v-if="Boolean(sketches)">
            <template v-for="(sketch, sketchIndex) in sketches">
                <md-divider :key="'sketch-divider-' + sketchIndex" class="sketch-divider"></md-divider>
                <div class="md-layout md-gutter sketch"
                    :key="'sketch_' + sketchIndex">
                    <div class="md-layout-item md-medium-size-50 md-xsmall-size-100">
                        <div class="desc">
                            <div class="md-title">{{ sketch.title }}</div>
                            <div class="md-md-body-1">{{ sketch.desc }}</div>

                            <div class="sketch-footer">
                                <div class="md-md-caption">Date: {{ sketch.date }}</div>
                                <div class="md-md-caption">Artist: {{ sketch.artist }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="md-layout-item md-medium-size-50 md-xsmall-size-100">
                        <div class="images">
                            <img
                                width="400"
                                v-if="sketch && sketch.photos && sketch.photos[0]"
                                :src="sketch.photos[0]" />
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Sketches',
    props: [],
    data() {
        return {
            sketches: undefined
        }
    },
    created() {
        // fetch contetn data
        axios.get('/files/root/interests/art/sketches/sketches.json')
            .then(res => {
                this.sketches = res.data.sketches
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
    .sketches-wrapper {
        .sketch {
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

            .sketch-footer{
                color: rgb(61, 155, 155);
            }
        }

        .sketch-divider {
            margin: auto;
            max-width: 800px;
        }
    }
</style>
