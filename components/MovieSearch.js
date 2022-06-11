import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../css/MovieSearch.module.css"



function MovieSearch({ poster_path, title, average, id, overview }) {
    return (


        <div id={styles.movie}>
            <Link to={`/movie/${id}`} className={styles.link}>
                <div className={styles.img__container}>
                    <img
                        className={styles.movie__poster}
                        src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                        alt={title} />

                </div>
               
                <div className={styles.textArea}>
                    <h2 className={styles.movie__title}>
                        {title}
                    </h2>
                    
                    <span className={styles.movie__average}>⭐️ {average}</span>

                    <p className={styles.movie__overview}>{overview}</p>

                </div>
                </Link>
        </div>



    );
};
MovieSearch.propTypes = {
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
}
export default MovieSearch;