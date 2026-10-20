import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Route,createRoutesFromElements ,RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.js'
import  Login from './components/Login.jsx'
import  Signup from './components/Signup.jsx'

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<App />} >
        {/* <Route  path='/' element={<Home />} /> */}
        <Route  path='/login' element={<Login />} />
        <Route  path='/signup' element={<Signup />} />
        {/* <Route  path='/' element={<Home />} /> */}
      </Route>
    )
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
   <RouterProvider router={router} />
  </Provider>

)
