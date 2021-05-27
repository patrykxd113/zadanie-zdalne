import App from '../Components/App.vue'
import RóżneKontrolkiHTML from '../Components/TabComponents/RóżneKontrolkiHTML.vue';

const routes = [
    {
        path: '',
        component: RóżneKontrolkiHTML,
    },
    {
        path: '/RozneKontrolkiHTML',
        component: () => import('../Components/TabComponents/RóżneKontrolkiHTML.vue'),
        name: 'RozneKontrolkiHTML'
    },
    {
        path: '/TabelaPracownikow',
        component: () => import('../Components/TabComponents/TabelaPracowników.vue'),
        name: 'TabelaPracownikow'
    },
    {
        path: '/TabelaFakturVAT',
        component: () => import('../Components/TabComponents/TabelaFakturVAT.vue'),
        name: 'TabelaFakturVAT'
    },
    {
        path: '/TabelaDelegacjiBD',
        component: () => import('../Components/TabComponents/TabelaDelegacjiBD.vue'),
        name: 'TabelaDelegacjiBD'
    },
    {
        path: '/DaneKontrahentow',
        component: () => import('../Components/TabComponents/DaneKontrahentow.vue'),
        name: 'DaneKontrahentow',
        children: [
            {
                path: '/TabelaKontrahentow',
                component: () => import('../Components/TabComponents/TabelaKontrahentow.vue'),
                name: 'TabelaKontrahentow'
            },
            {
                path: '/add',
                component: () => import('../Components/TabComponents/AddUser.vue'),
                name: 'add'
            },
            {
                path: '/edit/:id',
                component: () => import('../Components/TabComponents/EditUser.vue'),
                name: 'edit'
            },
        ]
    },
    {
        path : '*', name: 'RóżneKontrolkiHTML' 
    }
]

export default routes;