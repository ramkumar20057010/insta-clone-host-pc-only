import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App.jsx';
import Story from "./feed/story.jsx";
import Profile from "./sidebar/profile.jsx";




const router=createBrowserRouter([
  {
    path:"/",
    element: <App />
  },{
    path: "/story/:id/:total",
    element:<Story />
  },{
    path:"/profile",
    element: <Profile />
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
