import RootLayout from '@/layouts/rootLayouts/indexLayout'
import ArtLayout from '@/layouts/rootLayouts/ArtLayout'

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
            path: "art",
            name: "Art",
            component: ArtLayout,
        },
        {
            path: "onprogress",
            name: "on progress",
            component: OnProgress,
        }
    ]
}]