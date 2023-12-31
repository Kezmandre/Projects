import React,{useState} from 'react'
import styles from "./Header.css"
import {CgMenuRight} from "react-icons/cg"
import{MdOutlineCancel} from "react-icons/md"
import {sidebarData} from "../SidebarData"
import {Link,NavLink} from "react-router-dom"

const Header = () => {

    const[sidebar,setSidebar]=useState(false)

    const showSidebar=()=>{
        setSidebar(!sidebar)
    }
  return (
    <>
    <div className="container">
        <header>
            <h2>get<span>linked</span></h2>
        </header>
        <nav>
            <ul>
               <NavLink to="/"><li>Timeline</li></NavLink> 
                <li>Overview</li>
                <li>FAQs</li>
               <NavLink to="/contact"><li>Contact</li></NavLink> 
            </ul>
        </nav>
       <Link to="/register"><button className="register_btn">Register</button></Link> 
      
    </div>
    <div>
       <CgMenuRight className="menu" onClick={showSidebar} />
        </div> 
        <div className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
                <li className="nav-toggle" >
                    <MdOutlineCancel/>
                </li>
                {sidebarData.map((item,index)=>{
                    return(
                        <li key={index} className={item.name}>
                        <Link to={item.path}>
                        <span>{item.title}</span>
                        </Link>
                        </li>
                    )
                    })}
                    <button className="register_btn sidebar_btn">Register</button>
            </ul>
        </div>
        
        
    </>
  )
}

export default Header