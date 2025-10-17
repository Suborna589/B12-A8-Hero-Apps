import React from 'react';
import { createBrowserRouter } from "react-router"; 
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Apps from '../pages/Apps/Apps';
import AppsDetails from '../pages/AppsDetails/AppsDetails';
import Installation from '../pages/Installation/Installation';


 export const router = createBrowserRouter([
  {
    path: "/",
   Component:Root,
   errorElement:<ErrorPage></ErrorPage>,
   children:[
    {
      index: true,
      loader:()=> fetch("trendapp.json"),
      path:"/" ,
      Component:Home
    },
    {
      loader:()=> fetch("trendapp.json"),
      path:'/apps',
      Component:Apps
    },
    {
      path:'/appsDetails/:id',
      loader:()=> fetch("./trendapp.json"),
      Component:AppsDetails
    }, 

    {
      path:'/installation',
      Component:Installation
    }
   ]
  },
]);

