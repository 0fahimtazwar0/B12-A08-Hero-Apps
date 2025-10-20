import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../pages/Home/Home';
import Root from '../pages/Root/Root';
import AllApp from '../pages/AllApp/AllApp';
import AppDetails from '../pages/AppDetails/AppDetails'
import Installed from '../pages/Installed/Installed';
import Error from '../pages/Error/Error';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
        {
            index: true,
            Component: Home
        },
        {
          path: 'all-apps',
          Component: AllApp
        },
        {
        path: 'app/:id',
        Component: AppDetails,
        },
        {
          path: 'installed',
          Component: Installed
        },
        {
          path: '*',
          Component: Error
        }
    ]
  },
]);