const ManageCenter = () => import('@/pages/manageCenter/ManageCenter');
const ManageCenterIndex = () => import('@/pages/manageCenter/Index');

export default [
  {
    path: '/manageCenter',
    component: ManageCenter,
    children: [
      {
        path: '',
        name: 'ManageCenterIndex',
        component: ManageCenterIndex
      },
      {
        path: 'index',
        redirect: ''
      }
    ]
  }
];
