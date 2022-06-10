import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../css/Movie.module.css";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";


function Movie({ poster_path, title, average, id }) {
    return (

        <div>
            <div id={styles.movie}>
                <Link to={`/movie/${id}`}>
                    <div className={styles.img__container}>
                        <img
                            className={styles.movie__poster}
                            src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                            alt={title} />
                    </div>
                </Link>
                <h4 className={styles.movie__title}>
                    {title}
                </h4>
                <span className={styles.movie__average}>⭐️ {average}</span>
            </div>
        </div>
        
        
    );
};
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    average: PropTypes.number.isRequired,
}
export default Movie;