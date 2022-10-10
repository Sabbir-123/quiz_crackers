import { createBrowserRouter } from 'react-router-dom'
import Blog from '../Components/Blog'
import ErrorPage from '../Components/ErrorPage'
import { Home } from '../Components/Home2'

import Questions from '../Components/Questions'
import Root from '../Components/Root'
import Statistics from '../Components/Statistics'
import Topics from '../Components/Topics'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
    children: [
      { path: '/', element: <Home></Home>},
      { path: '/home', element: <Home></Home> },
      { path: '/topics', element: <Topics></Topics> },
      { path: '/statistics', element: <Statistics></Statistics> },
      { path: '/blog', element: <Blog></Blog> },
      {
        path: '/quiz/:quizId',
        loader: async({params})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
        },
        element: <Questions></Questions>
      }
    ],
  },
])

export default router
