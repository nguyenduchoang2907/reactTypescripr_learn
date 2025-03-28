// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom'; // 🔥 Sửa import
import Loadable from 'src/layouts/full/shared/loadable/Loadable';
import { Navigate } from 'react-router-dom';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

// Dashboard
const Dashboard = Loadable(lazy(() => import('../pages/dashboards/Dashboard')));

// Authentication
const Login = Loadable(lazy(() => import('../pages/auth/Login')));
const Register = Loadable(lazy(() => import('../pages/auth/Register')));

/* Middleware bảo vệ trang Login */
const ProtectedLogin = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem('token');
  return token ? <Navigate to="/dashboard" replace /> : children;
};

const Router = createBrowserRouter([
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/dashboard', element: <Dashboard /> },
    ],
  },
  {
    path: '/',
    element: <BlankLayout />,
    children: [
      { path: '/account/login', element: <ProtectedLogin><Login /></ProtectedLogin> }, // 🔥 Bọc Login trong ProtectedLogin
      { path: '/account/register', element: <Register /> },
    ],
  },
]);

export default Router;
thieu nien bach ma song list