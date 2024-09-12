import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Dashboard from './routes/Dashboard.jsx'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'

// criado a função que vai criar as rotas
const router = createBrowserRouter([
  {
    //Elementos pai
    path:'/', element:<App/>,
    errorElement: <Error/>,

    children:[
      {path:'/', element:<Home/>},
      {path:'/dashboard', element:<Dashboard/>},
      {path:'/login', element:<Login/>},
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
