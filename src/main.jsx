import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';



import Home from './home/Home.jsx';
import Product from './product/Product.jsx';
import ProductDetails from './product/ProductDetails.jsx';
import Contact from './contact/Contact.jsx';
import Cart from './cart/Cart.jsx';
import store from './redux/store.jsx';
import Services from './services/Services.jsx';
import Size from './size/Size.jsx';
import CheckOut from './checkout/CheckOut.jsx';






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
        path:'/product/:id', element: <ProductDetails  />
      },
      {
        path:'/contact', element: <Contact />
      },
      {
        path:'/cart', element: <Cart  />
      },
      {
        path:'/services', element: <Services  />
      },
      {
        path:'/size', element: <Size  />
      },
      {
        path:'/checkout', element: <CheckOut  />
      },
     
      
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
       <RouterProvider router={router} />
    </Provider>
   
  </StrictMode>,
)
