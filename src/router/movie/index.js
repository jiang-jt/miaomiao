export default {
    path: '/movie',
    component: () => import('@/views/movie'),
    children: [{
            path: 'city',
            component: () => import('@/components/city')
        },
        {
            path: 'search',
            component: () => import('@/components/search')
        },
        {
            path: 'comingSoon',
            component: () => import('@/components/comingSoon')
        },
        {
            path: 'nowPlaying',
            component: () => import('@/components/nowPlaying')
        },
        {
            path:'/movie',
            redirect: '/movie/nowPlaying'
        }
    ]
}