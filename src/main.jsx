import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Rooted from './Component/Rooted';
import Home from './Home';
import DasBoard from './DasBoard';
import BookDetails from './Component/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rooted></Rooted>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }, 
      {
        path: 'books/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch ('/booksData.json')
      },
      {
        path: 'dasboard',
        element: <DasBoard></DasBoard>
      }
      
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
