import Navbar from "./navbar"
import styles from "./Header.module.css"

import logo from "../images/logo.png"
function Header(){
    return (
        <>
            <div className={styles.header}>
            <Navbar/>
            </div>
        </>
     
    )
}

export default Header