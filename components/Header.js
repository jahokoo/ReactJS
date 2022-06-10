import {Link} from "react-router-dom";
import logo from "../img/logo.png"
function Header() {
    return (

            <div className="header">
                <Link to={"/"} className="logo"><img src={logo}/></Link>
                <div  className="search">
                    <Link to={"/Search"}>
                        Search
                    </Link>
                    
                </div>
                <div className="login"> <Link to={"/login"}>Login</Link></div>
            </div>


    )
}

export default Header;