import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DATA_URL, KEY } from "./Home"
import styles from "../css/Detail.module.css"
import Header from "../Header";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState([]);
    const { id } = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(`${DATA_URL}${id}?api_key=${KEY}`)
        ).json();
        setLoading(false)
        setDetails(json)
    };
    useEffect(() => {
        getMovie();
    }, []);
console.log(details)
    return (
        <div>{loading ? <h1>Loading...</h1> :
            <div className={styles.container}>
                <Header />
                <div className={styles.detail__top}>
                <img src={`https://image.tmdb.org/t/p/w300${details.poster_path}`} alt={details.title} />
                <img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt={details.title} />
                </div>
                <div className={styles.detail__bottom}>
                <h2 className={styles.title}>{details.title}</h2>
                <span>{details.release_date}</span>
                <ul className={styles.ul}>{details.genres.map((g) =>
                    (<li key={g.id}> {g.name} </li>))}
                     <p className={styles.overview}>{details.overview}</p>
                </ul>
               
                </div>
                
            </div>
        }</div>
    )
}

export default Detail;