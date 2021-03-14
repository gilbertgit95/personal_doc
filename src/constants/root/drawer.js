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
        route: '/'
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
            route: '/onprogress'
        },
        {
            label: 'Paints',
            route: '/onprogress'
        }
        ]
    },
    {
        type: 'navItem',
        label: 'Pets',
        icon: 'pets',
        route: '/onprogress'
    },
    {
        type: 'navItem',
        label: '3D Printing',
        icon: 'auto_awesome',
        route: '/onprogress'
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
            route: '/onprogress'
        },
        {
            label: 'Dependencies',
            route: '/onprogress'
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
            route: '/onprogress'
        },
        {
            label: 'Dependencies',
            route: '/onprogress'
        }
        ]
    },
    {
        type: 'navItem',
        label: 'Future Project',
        icon: 'access_time',
        subRoutes: [
        {
            label: 'Introduction',
            route: '/onprogress'
        },
        {
            label: 'Dependencies',
            route: '/onprogress'
        }
        ]
    }
    ]
}