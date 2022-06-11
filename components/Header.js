import {Link} from "react-router-dom";
import logo from "../img/logo.png";
import styles from "../css/Header.module.css";

function Header() {

    return (

            <div className={styles.header}>
                <Link to={"/"} className={logo}><img src={logo}/></Link>
                <div  className={styles.search}>
                    <Link to={"/Search"}>
                        Search
                    </Link>
                </div>
          
            </div>


    )
}

export default Header;