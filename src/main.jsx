import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/ErrorPage.jsx';
import Order from './pages/Order.jsx';
import Cart from './pages/Cart.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ContextProvider from './context/State.jsx';
import AddProducts from './pages/AddProduct.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { store } from './components/redux/store.jsx';
import AllProducts from './pages/AllProducts.jsx';

const router = createBrowserRouter([
  { path: "/", element: <Home/>, errorElement: <ErrorPage />},
  { path: "/order", element: <Order/>},
  { path: "/cart", element: <Cart/>},
  { path: "/dashboard", element: <Dashboard/>},
  { path: "/addproduct", element: <AddProducts />},
  { path: "/allproducts", element: <AllProducts />},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
    <Provider store={store}>   
      <ToastContainer />
    <RouterProvider router={router} /> 
    </Provider>
    </ContextProvider>
  </React.StrictMode>,
)
