import { createBrowserRouter } from "react-router";
import Root from "../Components/Root";
import Home from "../Pages/Home";
import ErrorPage from "./ErrorPage";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import AppInfo from "../Pages/AppInfo";

const router = createBrowserRouter([
    {
        path:'/', Component:Root,
        // errorElement:<ErrorPage/>,
        children:[
            {index:true, Component:Home},
            {path:'apps', Component:Apps},
            {path:'appinfo/:Id', Component:AppInfo},
            {path:'installation', Component:Installation},
            {path:'*', Component:ErrorPage}
        ]
    },
])

export default router;