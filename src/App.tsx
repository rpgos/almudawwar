import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Root from './components/Root'
import HomePage from './pages/HomePage'
import MusicPage from './pages/MusicPage'
import LinksPage from './pages/LinksPage'
import AboutPage from './pages/AboutPage'
import { PlayerContextProvider } from "./context/playerContext";
import { Analytics } from "@vercel/analytics/react"
import { KofiFloatingButtonReact } from 'kofi-react-widget'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: '/music',
          element: <MusicPage />
        },
        {
          path: '/links',
          element: <LinksPage />
        },
        {
          path: '/about',
          element: <AboutPage />
        },
      ]
    }
  ])
  return (
    <>
      <PlayerContextProvider>
        <Analytics />
        <RouterProvider router={router} />
      </PlayerContextProvider>
      <Footer />
      <KofiFloatingButtonReact username='rodribuilds' background='#FA4' />
    </>
  )
}

export default App
