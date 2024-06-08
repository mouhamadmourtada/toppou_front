/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: 'dashboard', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Dashboard', // name that appear in Sidebar
  },
  {
    path: '/app/admin',
    icon: 'OutlineCogIcon',
    name: 'Administrateur',
  },
  {
    path: '/app/admin/user',
    icon: 'PeopleIcon',
    name: 'Gestion des utilisateurs',
  },
  {
    path: '/app/admin/role',
    icon: 'UserRole',
    name: 'Gestion des roles',
  },
  {
    path: 'todos',
    icon: 'FormsIcon',
    name: 'Todos',
  },
  {
    path: '/app/projet',
    icon: 'ServiceIcon',
    name: 'Projets',
  },
  // {
  //   path: '/charts',
  //   icon: 'ChartsIcon',
  //   name: 'Charts',
  // },
  {
    path: '/app/activite',
    icon: 'InProgressIcon',
    name: 'Activités',
  },
  {
    path: '/app/depense',
    icon: 'MoneyIcon',
    name: 'Dépenses',
  },
  {
    path: '/app/finance',
    icon: 'BankIcon',
    name: 'Finances',
  },

  // {
  //   icon: 'PagesIcon',
  //   name: 'Pages',
  //   routes: [
  //     // submenu
  //     {
  //       path: 'dashboard',
  //       name: 'Login',
  //     },
  //     {
  //       path: '/create-account',
  //       name: 'Create account',
  //     },
  //     {
  //       path: '/forgot-password',
  //       name: 'Forgot password',
  //     },
  //     {
  //       path: '/404',
  //       name: '404',
  //     },
  //     {
  //       path: '/blank',
  //       name: 'Blank',
  //     },
  //   ],
  // },
  // {
  //   path: '/tables',
  //   icon: 'TablesIcon',
  //   name: 'Tables',
  // },
  
]

export default routes
