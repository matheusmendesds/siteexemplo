import { Link } from "react-router-dom"
import styles from './navbar.module.css'
function Navbar() {
    return (
        <div>
           <ul>
            <li><Link className={styles.link} to="/">Home</Link></li>
            <li ><Link className={styles.link} to="/Sobre">Sobre</Link></li>
            <li ><Link className={styles.link} to="/Contato">Contato</Link></li>
          </ul>
        </div>
    )
}

export default Navbar