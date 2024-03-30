import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Root from './components/Root'
import HomePage from './pages/HomePage'
import MusicPage from './pages/MusicPage'
import LinksPage from './pages/LinksPage'
import AboutPage from './pages/AboutPage'
import { PlayerContextProvider } from "./context/playerContext";

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
        <RouterProvider router={router} />
      </PlayerContextProvider>
      <Footer />
    </>
  )
}

export default App
