/*
 * Default Router
 */

// Vue and Vue Router
import Vue from 'vue'
import Router from 'vue-router'

// Register Vue Router
Vue.use(Router)

import HelloWorld from '@/components/HelloWorld.vue'
// Users layouts
// import LayoutUsersBackend from '@/layouts/variations/UsersBackend.vue'
// import LayoutUserProfile from '@/layouts/variations/UserProfile.vue'

// users components
// const UsersList = () => import("@/views/users/List.vue")
// const UsersAssesments = () => import("@/views/users/Assessments.vue")
// const UsersReports = () => import("@/views/users/Reports.vue")

// Router Configuration
export default new Router({
    linkActiveClass: 'active',
    linkExactActiveClass: '',
    scrollBehavior () {
      return { x: 0, y: 0 }
    },
    routes: [
      {
        path: '/',
        component: HelloWorld
      }
    ]
  })
// export default new Router({
//   linkActiveClass: 'active',
//   linkExactActiveClass: '',
//   scrollBehavior () {
//     return { x: 0, y: 0 }
//   },
//   routes: [
//     {
//       path: '/users',
//       redirect: '/users/list',
//       component: LayoutUsersBackend,
//       children: [
//         {
//           path: 'list',
//           name: 'List',
//           component: UsersList
//         },
//         {
//           path: 'profile',
//           redirect: '/users/profile/assessments',
//           component: LayoutUserProfile,
//           children: [
//             {
//               path: 'assessments',
//               name: 'Assessments',
//               component: UsersAssesments
//             },
//             {
//               path: 'reports',
//               name: 'Reports',
//               component: UsersReports
//             }
//           ]
//         }
//       ]
//     }
//   ]
// })
