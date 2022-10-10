import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../Components/ErrorPage'
import Root from '../Components/Root'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
    // children: [
    //   { path: '/', element: <Home /> },
    //   { path: '/home', element: <Home /> },
    //   { path: '/shop', element: <Shop /> },
    //   { path: '/cart', element: <Cart /> },
    //   { path: '/about', element: <About /> },
    // ],
  },
])

export default router
