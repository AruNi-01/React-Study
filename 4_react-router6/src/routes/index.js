import { Navigate } from "react-router-dom"
import About from "../pages/About"
import Home from "../pages/Home"
import News from "../pages/Home/News"
import Message from "../pages/Home/Message"
import Detail from "../pages/Home/Message/Detail"

const routes = [
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/home",
        element: <Home/>,
        children: [
            {
                path: "news",
                element: <News/>
            },
            {
                path: "message",
                element: <Message/>,
                children: [
                    // {
                    //     path: "detail/:id/:title/:content",
                    //     element: <Detail/>
                    // }
                    {
                        path: "detail",
                        element: <Detail/>
                    }
                ]
            }
        ]
    },
    {
        path: "/",
        element: <Navigate to="/home"/>
    },
    {
        path: "*",
        element: <NotFound/>
    }
]

function NotFound() {
    return <h1>这是 404 Not Found...</h1>
}

export default routes
