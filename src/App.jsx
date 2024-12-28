import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./components/RootLayout"
import Home from "./pages/Home"
import Product from "./pages/Product"

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout />}>
    <Route index element={<Home />}></Route>
    <Route path="/product" element={<Product />}></Route>
  </Route>
))

export default function App() {
  return (
   <>
   <RouterProvider router={router}/>
   </>
  )
}