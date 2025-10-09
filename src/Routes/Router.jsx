import { createBrowserRouter } from "react-router";
import Root from "../Components/Root";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import AppInfo from "../Pages/AppInfo";

const router = createBrowserRouter([
    {
        path:'/', Component:Root,
        children:[
            {index:true, Component:Home},
            {path:'apps', Component:Apps},
            {path:'apps/:Id', Component:AppInfo},
            {path:'installation', Component:Installation},
            {path:'*', Component:ErrorPage},
        ]
    },
])

export default router;