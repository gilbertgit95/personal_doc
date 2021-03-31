import RootLayout from '@/layouts/rootLayouts/indexLayout'
import ArtLayout from '@/layouts/rootLayouts/ArtLayout'
import TankFillerLayout from '@/layouts/rootLayouts/TankFillerLayout'
import MoneyMonitorLayout from '@/layouts/rootLayouts/MoneyMonitorLayout'

// single page nav
import AboutMe from '@/modules/root/aboutMe/AboutMe'
import Pets from '@/modules/root/pets/Pets'
import EdPrinting from '@/modules/root/3dPrinting/3dPrinting'

// multipage nav

// art
import Sketches from '@/modules/root/art/Sketches'
import Paintings from '@/modules/root/art/Paintings'
import OnProgress from '@/components/OnProgress'

// tank filler
import TankFillerIntro from '@/modules/root/tankFiller/Intro'

// money monitor
import MoneyMonitorIntro from '@/modules/root/moneyMonitor/Intro'

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
            path: "pets",
            name: "Pets",
            component: Pets,
        },
        {
            path: "3dprinting",
            name: "3D printing",
            component: EdPrinting,
        },
        {
            path: "onprogress",
            name: "on progress",
            component: OnProgress,
        },
        {
            path: "art",
            name: "Art",
            redirect: "art/sketches",
            component: ArtLayout,
            children: [
                {
                    path: "sketches",
                    name: "Sketches",
                    component: Sketches,
                },
                {
                    path: "paintings",
                    name: "Paintings",
                    component: Paintings,
                }
            ]
        },
        {
            path: "tankfiller",
            name: "Tank Filler",
            redirect: "tankfiller/intro",
            component: TankFillerLayout,
            children: [
                {
                    path: "intro",
                    name: "tank filler intro",
                    component: TankFillerIntro,
                }
            ]
        },
        {
            path: "moneymonitor",
            name: "Money Monitor",
            redirect: "moneymonitor/intro",
            component: MoneyMonitorLayout,
            children: [
                {
                    path: "intro",
                    name: "money Monitor intro",
                    component: MoneyMonitorIntro,
                }
            ]
        }
    ]
}]