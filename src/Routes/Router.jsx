import { createBrowserRouter } from "react-router";
import Root from "../Components/Root";
import Home from "../Pages/Home";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
    {
        path:'/', Component:Root,
        children:[
            {index:true, Component:Home}
        ]
    },
    {path:'*', Component:ErrorPage}
])

export default router;