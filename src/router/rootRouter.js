import RootLayout from '@/layouts/rootLayouts'
import AboutMe from '@/modules/root/AboutMe'

export default [{
    path: '/',
    redirect: '/aboutMe',
    component: RootLayout,
    children: [
        {
            path: "aboutMe",
            name: "About Me",
            component: AboutMe,
        }
    ]
}]