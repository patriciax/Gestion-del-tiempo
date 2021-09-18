const Dashbord = ()=>import('./components/Dashbord.vue')
const Historial = ()=>import('./components/Historial.vue')

//components task
const Mostrar = ()=>import('./components/task/Mostrar.vue')
const Crear = ()=>import('./components/task/Crear.vue')
const Editar = ()=>import('./components/task/Editar.vue')

export const routes = [
    {
        name: 'dashbord',
        path:'/',
        component:Dashbord
    },
    {
        name: 'historial',
        path:'/historial',
        component:Historial
    },
    {
        name: 'mostrarTasks',
        path:'/tasks',
        component: Mostrar
    },
    {
        name: 'crearTask',
        path:'/crear',
        component: Crear
    },
    {
        name: 'editarTask',
        path:'/editar/:id',
        component: Editar
    },
]
