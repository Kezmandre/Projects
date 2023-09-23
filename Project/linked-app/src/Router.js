import React from 'react'
import{Routes,Route} from "react-router-dom"
import Header from './Components/Header/Header'

const Router = () => {
  return (
    <Routes>
        <Route path='/'
        element={<Header/>}
        />
    </Routes>
  )
}

export default Router