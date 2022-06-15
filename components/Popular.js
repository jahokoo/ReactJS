import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../css/PopularSearch.module.css"

function PopularSearch({ poster_path, title, vote_average, id ,category,types}) {
    if(poster_path == null){
        return
     }
    return (

        <div id={styles.movie}>
                
                <div className={styles.img__container}>
                <Link to={`/${category}/${id}`} className={styles.link}>
                    <img
                        className={styles.movie__poster}
                        src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                        alt={title} />
                <div className={styles.content}>
                    <h2 className={styles.movie__title}>
                        {title}
                    </h2>
                    <span className={styles.movie__average}>⭐️ {vote_average}</span>
                    </div>
                    </Link>
                </div>
        </div>

    );
};
PopularSearch.propTypes = {
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
}
export default PopularSearch;