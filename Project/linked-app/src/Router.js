import React from 'react'
import{Routes,Route} from "react-router-dom"
import Layout from './Components/Layout/Layout'
import ContactScreen from './Pages/Contact'
import RegisterScreen from './Pages/Register'
import HomeScreen from './Pages/Home'

const Router = () => {
  return (
    <Routes>
        <Route path='/'
        element={
          <Layout>
            <HomeScreen/>
          </Layout>
      }
        />
        <Route
        path='/contact'
        element={
          <Layout>
            <ContactScreen/>
          </Layout>
        }
        />
        <Route
        path='/register'
        element={
          <Layout>
            <RegisterScreen/>
          </Layout>

        }
        />
    </Routes>
  )
}

export default Router