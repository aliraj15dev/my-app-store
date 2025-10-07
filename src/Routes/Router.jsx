import { createBrowserRouter } from "react-router";
import Root from "../Components/Root";
import Home from "../Pages/Home";
import ErrorPage from "./ErrorPage";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";

const router = createBrowserRouter([
    {
        path:'/', Component:Root,
        children:[
            {index:true, Component:Home},
            {path:'apps', Component:Apps},
            {path:'installation', Component:Installation},
        ]
    },
    {path:'*', Component:ErrorPage}
])

export default router;