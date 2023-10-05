import { Navigate, createBrowserRouter, Outlet } from "react-router-dom";

import { AppLayout, GuestLayout } from './layouts/index';
import { Login, Register, Dashboard, NotFound, Home } from './views/index';

const router = createBrowserRouter([
    {
        path: '/admin',
        element: <AppLayout />,
        children: [
            /* {
                path: '/',
                element: <Navigate to="/login" />
            }, */
            
            /* {
                path: '/admin',
                element: <Dashboard />,
                children: [
                    {
                        path: '/admin/settings',
                        element: <Navigate to='/mojij' />
                    }
                ]
            }, */
        ]
    },

    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },

            {
                path: '/login',
                element: <Login />
            },
        
            {
                path: '/register',
                element: <Register />
            },
        ]
    },

    {
        path: '*',
        element: <NotFound />
    }
]);

export default router;
