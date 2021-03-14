<template>
    <div class="about-me-wrapper" @click="closeDrawer()">
        <div class="about-me-content" v-if="info">
            <md-content style="display: flex;">
                <div style="width: 120px; display: inline-block; float: left;">
                    <md-avatar class="md-large">
                        <img :src="info.header.profilePic" alt="My profile Picture">
                    </md-avatar>
                </div>
                <div style="width: 70%; display: inline-block; padding-top: 20px;">
                    <div class="md-display-1" style="color: #333;">{{ info.header.fullname }}</div>
                    <div class="md-headline">{{ info.header.workDesc }}</div>
                </div>
            </md-content>
            <md-content style="padding-top: 10px;padding-bottom: 40px;">
                <md-button
                    class="btn"
                    target="_blank"
                    :key="'header-link-' + lkey"
                    :href="link.value"
                    v-for="(link, lkey) in info.header.links">
                    {{ link.label }}
                </md-button>
            </md-content>
            <md-divider></md-divider>

            <md-content class="content-section">
                <div class="content-section-title">
                    <div class="md-headline">Overview</div>
                </div>
                <div class="content-section-body">
                    <div class="md-caption text-content desc" v-html="info.overview"></div>
                </div>
            </md-content>
            <md-divider></md-divider>

            <md-content class="content-section">
                <div class="content-section-title">
                    <div class="md-headline">Experience</div>
                </div>
                <div
                    class="content-section-body"
                    :key="'experience-' + xIndex"
                    v-for="(exp, xIndex) in info.experience">
                    <div class="md-caption text-content">
                        <div>
                            <span class="md-title">{{ exp.org }}</span>
                            <span v-html="exp.desc"></span>
                        </div>
                        <div class="footer-content">
                            <span><b>Position: </b><i>{{ exp.position }}</i></span>
                            <span style="margin-left: 10px;"><b>Year: </b><i>{{ exp.year }}</i></span>
                        </div>
                        <div style="text-align: right;">
                            <md-button
                                class="btn"
                                target="_blank"
                                :href="lnk.value"
                                :key="'experience-' + xIndex + 'links' + lIndex"
                                v-for="(lnk, lIndex) in exp.links">
                                {{ lnk.label }}
                            </md-button>
                        </div>
                    </div>
                </div>
            </md-content>
            <md-divider></md-divider>

            <md-content class="content-section">
                <div class="content-section-title">
                    <div class="md-headline">Projects</div>
                </div>
                <div class="content-section-body">
                    <div
                        :key="'project-' + pIndex"
                        v-for="(proj, pIndex) in info.personalProjs"
                        class="md-caption text-content">
                        <div>
                            <span class="md-title">{{ proj.title }}</span>
                            <span v-html="proj.desc"></span>
                        </div>
                        <div class="footer-content">
                            <span><b>Status: </b><i>{{ proj.status }}</i></span>
                            <span style="margin-left: 10px;"><b>Year: </b><i>{{ proj.year }}</i></span>
                        </div>
                        <div style="text-align: right;">
                            <md-button
                                target="_blank"
                                :key="'project-' + pIndex + 'plink-' + lIndex"
                                v-for="(lnk, lIndex) in proj.links"
                                :href="lnk.value"
                                class="btn">{{ lnk.label }}</md-button>
                        </div>
                    </div>
                </div>
            </md-content>
            <md-divider></md-divider>

            <md-content class="content-section">
                <div class="content-section-title">
                    <div class="md-headline">Education</div>
                </div>
                <div class="content-section-body">
                    <div
                        :key="'edu-' + eduIndex"
                        v-for="(edu, eduIndex) in info.education"
                        class="md-caption text-content">
                        <div>
                            <span class="md-title">{{ edu.org }}</span>
                            <span v-html="edu.desc"></span>
                        </div>
                        <div class="footer-content">
                            <span><b>Year: </b><i>{{ edu.year }}</i></span>
                        </div>
                        <div
                            style="text-align: right;">
                            <md-button
                                target="_blank"
                                :href="eduLink.value"
                                :key="'edu-' + eduIndex + 'eduLink-' + eduLinkIndex"
                                v-for="(eduLink, eduLinkIndex) in edu.links"
                                class="btn">
                                {{ eduLink.label }}
                            </md-button>
                        </div>
                    </div>
                </div>
            </md-content>
            <md-divider></md-divider>

            <md-content class="content-section">
                <div class="content-section-title">
                    <div class="md-headline">Skills</div>
                </div>
                <div class="content-section-body">
                     <div
                        :key="'skill-' + skillIndex"
                        v-for="(skill, skillIndex) in info.skills"
                        class="md-caption text-content">
                        <div>
                            <div class="md-title">{{ skill.title }}</div>
                            <div class="desc">
                                <span>{{ skill.desc }}</span>
                                <span
                                    :key="'skill-' + skillIndex + 'sTech-' + sTechIndex"
                                    v-for="(sTech, sTechIndex) in skill.techs">
                                    <b>{{ sTech }}</b>
                                    <span v-if="skill.techs.length !== (sTechIndex + 1)">, </span>
                                    <span v-else>.</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </md-content>

            <md-content class="content-section">
                <div>
                    <div class="md-caption">Last modified: {{ info.header.lastUpdate }}</div>
                </div>
            </md-content>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'AboutMe',
    props: [],
    data() {
        return {
            info: undefined
        }
    },
    created() {
        this.closeDrawer()

        // fetch contetn data
        axios.get('/files/root/aboutMe/aboutme.json')
            .then(res => {
                this.info = res.data
            })
            .catch(() => {
                // do nothing
            })
    },
    methods: {
        closeDrawer() {
            if (innerWidth < 700) {
                this.$store.commit('setDrawer', false)
            }
        }
    }
}
</script>

<style lang="scss">
    .about-me-wrapper {
        b {
            color: #33bf7c;
        }

        .desc {
            text-indent: 50px;
            margin-top: 10px;
        }

        .about-me-content {
            width: 80%;
            margin: auto;
            padding: 10px;
            padding-top: 30px;
            min-width: 500px;
            max-width: 700px;

            .md-avatar.md-large {
                min-width: 100px;
                min-height: 100px;
                border-radius: 100px;
                font-size: 32px;
            }

            .btn {
                border: 1px solid #ddd;
            }

            .content-section {
                padding-top: 20px;
                padding-bottom: 20px;
                .content-section-title {
                    
                }

                .content-section-body {
                    padding-left: 100px;

                    .text-content {
                        font-size: 16px;
                        line-height: 25px;
                        margin-top: 20px;

                        .md-title {
                            color: #333;
                        }

                        .footer-content {
                            color: rgb(47, 127, 201);
                            margin-top: 10px;
                            font-size: 13px;
                        }
                    }
                }
            }
        }
    }
</style>
