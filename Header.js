import {Link} from "react-router-dom";
function Header() {
    return (
        <div>
            <Link to={"/"}>
                <h1
                    style={{
                        textAlign: "center",
                        color: "#fff",
                        marginBottom: "50px"
                    }}>The Movies</h1>
            </Link>
        </div>

    )
}

export default Header;