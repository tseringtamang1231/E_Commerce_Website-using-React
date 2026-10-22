import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Route,createRoutesFromElements ,RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.js'
import  Login from './components/Login.jsx'
import  Signup from './components/Signup.jsx'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Favourite from './pages/Favourite.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<App />} >
        <Route  path='/' element={<Home />} />
        <Route  path='/login' element={<Login />} />
        <Route  path='/signup' element={<Signup />} />
        <Route  path='/products' element={<Shop />} />
        <Route  path='/About' element={<About />} />
        <Route  path='/Contact' element={<Contact />} />
        <Route  path='/Favourite' element={<Favourite />} />
        <Route  path='/product/:id' element={<ProductDetails/>} />
        
      </Route>
    )
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
   <RouterProvider router={router} />
  </Provider>

)
