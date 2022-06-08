import {Link} from "react-router-dom";

function Header() {
    return (
        <div>
            <Link to={"/"}>
                <div className="header">The Movies</div>
            </Link>
        </div>

    )
}

export default Header;