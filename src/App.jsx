import AppLayout from "./components/Layout/AppLayout"
import Home from "./components/Pages/Home"
import {createBrowserRouter, RouterProvider }from "react-router-dom"
import TvComp from "./components/pages/TvComp"
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/tv",
          element:<TvComp/>
        }
      ] 
    }
  ]) 
  return (
    <RouterProvider router={router}/> 
  )
}

export default App
