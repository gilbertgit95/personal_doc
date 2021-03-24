import RootLayout from '@/layouts/rootLayouts/indexLayout'
import ArtLayout from '@/layouts/rootLayouts/ArtLayout'

import AboutMe from '@/modules/root/AboutMe'
import Sketches from '@/modules/root/Sketches'

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
            // redirect: "art/sketches",
            component: ArtLayout,
            children: [
                {
                    path: "sketches",
                    name: "Sketches",
                    component: Sketches,
                },
            ]
        },
        {
            path: "onprogress",
            name: "on progress",
            component: OnProgress,
        }
    ]
}]