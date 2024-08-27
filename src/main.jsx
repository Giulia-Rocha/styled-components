import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes//Home.jsx'
import GlobalStyle from './css/GlobalStyle.jsx'

// função que cria as rotas
const router = createBrowserRouter([{

  /*Rotas pai*/
  path:'/',element:<App/>,
  errorElement:<Error/>,
  /*Rotas filhas*/
  
  children:[
    {path:'/', element:<Home/>},
  ]

}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/*Chamando o CSS Global*/}
    <GlobalStyle/>
  </StrictMode>,
)
