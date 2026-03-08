import './App.css'
import Layout from './Layout'
import About from './section/about'
import Contact from './section/contact'
import Experience from './section/experience'
import Hero from './section/hero'
import Projects from './section/projects'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Hero />
      },
      {
        path: 'projects',
        element: <Projects />
      },
      {
        path: 'experience',
        element: <Experience />
      },
      {
        path: 'about',
        element: <About />
      },
      {
         path: 'contact',
        element: <Contact />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
