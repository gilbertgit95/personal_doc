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
        label: 'Resume',
        icon: 'text_snippet',
        route: '/'
    },
    {
        type: 'navTitle',
        label: 'Hobbies',
        icon: 'stars',
        route: '/'
    },
    {
        type: 'navItem',
        label: 'Art',
        icon: 'brush',
        subRoutes: [
        {
            label: 'Sketches',
            route: '/'
        },
        {
            label: 'Paints',
            route: '/'
        }
        ]
    },
    {
        type: 'navItem',
        label: 'Pets',
        icon: 'pets',
        route: '/'
    },
    {
        type: 'navItem',
        label: '3D Printing',
        icon: 'auto_awesome',
        route: '/'
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
            route: '/'
        },
        {
            label: 'Dependencies',
            route: '/'
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
            route: '/'
        },
        {
            label: 'Dependencies',
            route: '/'
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
            route: '/'
        },
        {
            label: 'Dependencies',
            route: '/'
        }
        ]
    }
    ]
}