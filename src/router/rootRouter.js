import RootLayout from '@/layouts/rootLayouts'
import Portfolio from '@/modules/root/Portfolio'

export default [{
    path: '/',
    redirect: '/portfolio',
    component: RootLayout,
    children: [
        {
            path: "portfolio",
            name: "Portfolio",
            component: Portfolio,
        }
    ]
}]