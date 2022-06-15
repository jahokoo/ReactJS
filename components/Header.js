import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import styles from "../css/Header.module.css";

function Header() {


    return (

        <header className={styles.header}>
            <Link to={"/"} className={logo}><img src={logo} /></Link>

            <nav className={styles.nav}>
                <div className={styles.nav_child}>
                    <Link to={"/movies"}>
                        Movie
                    </Link>
                </div>
                <div className={styles.nav_child}><Link to={"/tv"}>
                    TV
                </Link></div>
            </nav>
        </header>


    )
}

export default Header;