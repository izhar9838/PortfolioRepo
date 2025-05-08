import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import Projects from './components/Projects.jsx';
import ContactUs from './components/ContactUs.jsx';
import AboutUs from './components/AboutUs.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path='/' element={<Home />} />
      {/* 
      
      <Route path='/services' element={<Services />} /> */}
      <Route path='/projects' element={<Projects />} />
      <Route path='/contact-us' element={<ContactUs />} />
      <Route path='/about-us' element={<AboutUs />} />
      {/* <Route path='/projects/:projectId' element={<ProjectDetails />} /> */}
      {/* Add more routes as needed */}
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
