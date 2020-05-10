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
            path: 'detail/1/:movieId',
            components: {
                default: () => import('@/components/nowPlaying'),
                detail: () => import('@/views/movie/detail')
            },
            props: {
                detail: true
            }
        },
        {
            path: 'detail/2/:movieId',
            components: {
                default: () => import('@/components/comingSoon'),
                detail: () => import('@/views/movie/detail')
            },
            props: {
                detail: true
            }
        },
        {
            path: '/movie',
            redirect: '/movie/nowPlaying'
        }
    ]
}