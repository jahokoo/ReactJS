import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../css/Movie.module.css";

function Movie({ poster_path, title, vote_average, id,category}) {
    if(poster_path == null){
       return
    }
    return (
        
        <div id={styles.movie}>
            <Link to={`/${category}/${id}`}>
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
            <span className={styles.movie__average}>⭐️ {vote_average}</span>
        </div>



    );
};
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
}
export default Movie;