import { createBrowserRouter } from "react-router";
import Root from "../Components/Root";
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
        path:'/', Component:Root,
        children:[
            {index:true, Component:Home}
        ]
    }
])

export default router;