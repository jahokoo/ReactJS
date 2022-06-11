import styles from "../css/Detail.module.css"
import PropTypes from "prop-types";

function Details({title, backdrop_path, poster_path,
    release_date, runtime, vote_average, genres, overview}) {
    return (
        <div className={styles.container}>

            <div className={styles.detail__top} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})` }}>
                <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
            </div>
            <div className={styles.detail__bottom}>
                <h2 className={styles.title}>{title}</h2>
                <span>{release_date}</span>
                <span className={styles.runtime}>Runtime ({runtime}m)</span>
                <span className={styles.vote_average}>⭐️ {vote_average}</span>
                <ul className={styles.ul}>{genres.map((g) =>
                    (<li key={g.id}> {g.name} </li>))}
                    <p className={styles.overview}>{overview}</p>
                </ul>
            </div>

        </div>);
};


Details.propTypes={
    title:PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    poster_path:  PropTypes.string.isRequired,
    release_date:  PropTypes.string.isRequired,
    runtime :  PropTypes.number.isRequired,
    vote_average:  PropTypes.number.isRequired,
    genres:  PropTypes.array.isRequired,
    overview :  PropTypes.string.isRequired,
}

export default Details;