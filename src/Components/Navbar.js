import React from 'react';
import {Link} from "react-router-dom";
import styles from "./Navbar.module.css";


const Navbar = () => {
    return (
       <nav className={styles.title}>
           <span>User Data</span>
           <ul>
               <Link to="/">Home</Link>
               <Link to="/users">User</Link>
              
           </ul>
       </nav>
    )
}

export default Navbar