import React from 'react'
import ReactDOM from 'react-dom/client' 
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home.jsx'; 
import BookList from './components/BookList.jsx';
import PageToRead from './components/PageToRead.jsx';
import BookDetails from './components/BookDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }, 
      {
        path: '/bookList',
        element: <BookList></BookList>
      },
      {
        path: '/pagesToRead',
        element: <PageToRead></PageToRead>
      },
      {
        path: '/book/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../books.json')
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
