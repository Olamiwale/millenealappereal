import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



import Home from './home/Home.jsx';
import Product from './product/Product.jsx';
import ProductDetails from './product/ProductDetails.jsx';
import Contact from './contact/Contact.jsx';
import Cart from './cart/Cart.jsx';
import About from './about/About.jsx'






const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      
      {
        path:'/', element: <Home />
      },
      {
        path:'/product', element: <Product />
      },
      {
        path:'/product/:id', element: <ProductDetails />
      },
      {
        path:'/contact', element: <Contact />
      },
      {
        path:'/cart', element: <Cart />
      },
      {
        path:'/about', element: <About />
      },
      
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
