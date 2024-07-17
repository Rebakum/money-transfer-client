
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Dashboard/Home/Home';
import Overview from '../pages/Dashboard/Overview';
import Transactions from '../pages/Dashboard/Transactions';
import EntryPage from '../pages/EntryPage/EntryPage';
import ErrorPage from '../pages/ErroePage/ErrorPage';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Layout from './Layout';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: '/',
        element: <EntryPage/>
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/home',
        element: <Home/>
      },
    
      {
        path: 'overview',
        element: <Overview />,
      },
      {
        path: 'transactions',
        element: <Transactions />,
      },
    ]
  },
  
]);



export default router;