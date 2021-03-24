<template>
    <div class="sketches-wrapper">
        <div v-if="Boolean(sketches)">
            <div
                class="sketch"
                :key="'sketch_' + sketchIndex"
                v-for="(sketch, sketchIndex) in sketches">
                <div
                    v-if="!isEven(sketchIndex)"
                    class="images">
                    <img
                        width="400"
                        v-if="sketch && sketch.photos && sketch.photos[0]"
                        :src="sketch.photos[0]" />
                </div>
                <div class="desc">
                    {{ sketch.desc }}
                </div>
                <div
                    v-if="isEven(sketchIndex)"
                    class="images">
                    <img
                        width="400"
                        v-if="sketch && sketch.photos && sketch.photos[0]"
                        :src="sketch.photos[0]" />
                </div>
            </div>
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
            margin-bottom: 50px;
            width: 800px;
            position: relative;

            .desc {
                width: 50%;
                display: inline-block;
                padding: 5px;
            }

            .images {
                width: 50%;
                display: inline-block;
                padding: 5px;
            }
        }
    }
</style>
