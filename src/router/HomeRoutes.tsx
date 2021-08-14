import { Home } from '../components/pages/Home';
import { Page404 } from '../components/pages/Page404';
import { Setting } from '../components/pages/Setting';
import { UserManagement } from '../components/pages/UserManagement';

export const HomeRoutes = [
  {
    path: '/',
    exact: true,
    children: <Home></Home>,
  },
  {
    path: '/user_management',
    exact: false,
    children: <UserManagement></UserManagement>,
  },
  {
    path: '/setting',
    exact: false,
    children: <Setting></Setting>,
  },
  {
    path: '*',
    exact: false,
    children: <Page404></Page404>,
  },
];
