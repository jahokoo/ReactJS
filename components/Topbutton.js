import { useEffect, useState } from "react";
import styles from "../css/styles.css"
function TopButton() {

    const [showButton, setShowButton] = useState(false);

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    };
    const handleShowButton = () => {
        if (window.scrollY > 500) {
            setShowButton(true)
        } else {
            setShowButton(false)
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleShowButton)
        return () => {
            window.removeEventListener("scroll", handleShowButton)
        }
    }, []);

    return showButton && (
        <div className="scroll__container">
            <button id="top" onClick={scrollToTop} type="button" > Top</button>
        </div>

    )
}

export default TopButton;