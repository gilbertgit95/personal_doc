<template>
    <div class="about-me-wrapper">
        About me
    </div>
</template>

<script>

export default {
    name: 'AboutMe',
    props: [],
    data() {
        return {
            info: {
                // header
                header: {
                    lastUpdate: '',
                    profilePic: '',
                    fullname: '',
                    workDesc: '',
                    links: [
                        {
                            type: 'anchor',
                            label: '',
                            value: ''
                        },
                        {
                            type: 'email',
                            label: '',
                            value: ''
                        }
                    ]
                },

                // overview
                overview: '',

                // experience
                experience: [
                    {
                        org: '',
                        desc: '',
                        position: '',
                        year: '',
                        links: [
                            {
                                type: 'anchor',
                                label: '',
                                value: ''
                            }
                        ]
                    }
                ],

                // personal projects
                personalProjs: [
                    {
                        title: '',
                        desc: '',
                        status: '',
                        year: '',
                        mainTechs: [],
                        links: [
                            {
                                type: 'anchor',
                                label: '',
                                value: ''
                            }
                        ]
                    }
                ],

                // educations
                education: [
                    {
                        org: '',
                        desc: '',
                        year: '',
                        links: [
                            {
                                type: 'anchor',
                                label: '',
                                value: ''
                            }
                        ]
                    }
                ],

                skills: [
                    {
                        title: '',
                        desc: '',
                        techs: []
                    },
                    {
                        title: '',
                        desc: '',
                        techs: []
                    }
                ]
            }
        }
    },
    created() {
        this.$store.commit('setDrawer', false)
    }
}
</script>

<style lang="scss" scoped>
</style>
