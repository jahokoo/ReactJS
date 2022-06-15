import styles from "../css/Detail.module.css"
import PropTypes from "prop-types";

import useTitle from "../hooks/useTitle"
function Details({title, backdrop_path, poster_path,
    release_date, runtime, vote_average, genres, overview}) {
        useTitle(title)
        const IMG_URL = `https://image.tmdb.org/t/p/w300${poster_path}`;
        const BG_URL = `url(https://image.tmdb.org/t/p/original${backdrop_path})`
    return (
        <div className={styles.container}>

            <div className={styles.detail__top} style={{ backgroundImage: BG_URL }}>
                <img src={IMG_URL} alt={title} />
            </div>
            <div className={styles.detail__bottom}>
                <h2 className={styles.title}>{title}</h2>
                <span>{release_date}</span>
                <span className={styles.runtime}>Runtime ({runtime}m)</span>
                <span className={styles.vote_average}>⭐️ {vote_average}</span>
                <ul className={styles.ul}>{genres.map((g) =>
                    (<li className={styles.li} key={g.id}> {g.name} </li>))}
                    <p className={styles.overview}>{overview ? overview : <p>this is no had overview</p>}</p>
                </ul>
            </div>

        </div>);
};


Details.propTypes={
    title:PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    poster_path:  PropTypes.string.isRequired,
    release_date:  PropTypes.string.isRequired,
    runtime :  PropTypes.any.isRequired,
    vote_average:  PropTypes.number.isRequired,
    genres:  PropTypes.array.isRequired,
    overview :  PropTypes.string.isRequired,
}

export default Details;