import Vue from 'vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import PNavigation from './components/PNavigation.vue'
import PTitle from './components/PTitle.vue'
import PIntro from './components/PIntro.vue'
import PEducation from './components/PEducation.vue'
import PInterests from './components/PInterests.vue'
import PPubs from './components/PPubs.vue'
import PSkills from './components/PSkills.vue'
import PProjects from './components/PProjects.vue'
import PPaintings from './components/PPaintings.vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

window.app = new Vue({
        el: '#app',
        components: {PNavigation, PTitle, PIntro, PEducation, PInterests, PPubs, PSkills, PProjects, PPaintings},
        data() {
            return {}
            },
        computed: {
        }
      });