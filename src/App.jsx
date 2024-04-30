import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MarketingPage from './pages/MarketingPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/marketing",
    element: <MarketingPage />
  }
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
