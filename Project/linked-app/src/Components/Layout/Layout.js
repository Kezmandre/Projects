import React from 'react'
import Header from "../Header/Header"
import styles from "./Layout.module.css"
import Footers from '../Footer/Footer'

 const Layout = ({children}) => {
  return (
    <div>
    <Header/>
    <main className={styles.main}>{children}</main>
    <Footers/>
    </div>
  )
}

export default Layout