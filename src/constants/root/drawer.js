export default {
    navTitle: 'My Portfolio',
    navigations: [
        {
            type: 'navTitle',
            label: 'Personal Data',
            icon: 'perm_identity'
        },
        {
            type: 'navItem',
            label: 'About Me',
            icon: 'text_snippet',
            route: '/aboutMe'
        },
        {
            type: 'navTitle',
            label: 'Hobbies and Interests',
            icon: 'stars',
            route: '/onprogress'
        },
        {
            type: 'navItem',
            label: 'Art',
            icon: 'brush',
            subRoutes: [
                {
                    label: 'Sketches',
                    route: '/art/sketches'
                },
                {
                    label: 'Paints',
                    route: '/art/paintings'
                }
            ]
        },
        {
            type: 'navItem',
            label: 'Pets',
            icon: 'pets',
            route: '/pets'
        },
        {
            type: 'navItem',
            label: '3D Printing',
            icon: 'auto_awesome',
            route: '/3dprinting'
        },
        {
            type: 'navTitle',
            label: 'Projects Documentation',
            icon: 'widgets'
        },
        {
            type: 'navItem',
            label: 'Tank Filler',
            icon: 'gradient',
            subRoutes: [
                {
                    label: 'Introduction',
                    route: '/tankfiller/intro'
                }
            ]
        },
        {
            type: 'navItem',
            label: 'Money Monitor',
            icon: 'bar_chart',
            subRoutes: [
                {
                    label: 'Introduction',
                    route: '/moneymonitor/intro'
                }
            ]
        }
    ]
}