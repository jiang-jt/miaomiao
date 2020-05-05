export default {
    path: '/cinema',
    component: () => import('@/views/cinema'),
    children:[
        {
            path:'clist',
            component:()=>import ('@/components/cinemaList')
        },
        {
            path:'/cinema',
            redirect: 'clist'
        }
    ]
}