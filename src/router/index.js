import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Root from './rootRouter'
import Blog from './blogRouter'
import Palandasin from './palandasinRouter'

export default new Router({
    routes: [
      ...Root,
      ...Blog,
      ...Palandasin
    ]
})