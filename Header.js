import {Link} from "react-router-dom";

function Header() {
    return (
        <div>
            <Link to={"/"}>
                <h1
                    style={{
                        textAlign: "center",
                        color: "rgb(142 26 26)",
                        marginBottom: "50px",
                        fontStyle: "oblique",
                        textShadow:"1px 3px #333",
                        zIndex:"99",
                        position:"relative"
                    }}>The Movies</h1>
            </Link>
        </div>

    )
}

export default Header;