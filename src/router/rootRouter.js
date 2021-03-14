import RootLayout from '@/layouts/rootLayouts'
import AboutMe from '@/modules/root/AboutMe'

import OnProgress from '@/components/OnProgress'

export default [{
    path: '/',
    redirect: '/aboutMe',
    component: RootLayout,
    children: [
        {
            path: "aboutMe",
            name: "About Me",
            component: AboutMe,
        },
        {
            path: "onprogress",
            name: "on progress",
            component: OnProgress,
        }
    ]
}]