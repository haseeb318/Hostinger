import AppLayout from "./components/Layout/AppLayout"
import Home from "./components/Pages/Home"
import {createBrowserRouter, RouterProvider }from "react-router-dom"
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        }
      ] 
    }
  ]) 
  return (
    <RouterProvider router={router}/> 
  )
}

export default App
