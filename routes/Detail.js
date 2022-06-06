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
    return (
        <div>{loading ? <h1>Loading...</h1> :
            <div>
                <Header />
                <img src={`https://image.tmdb.org/t/p/w400${details.poster_path}`} alt={details.title} />
                <h2>{details.title}</h2>
                <p>{details.overview}</p>
                <ul><h3>Genres</h3> {details.genres.map((g) =>
                    (<li key={g.id}> {g.name} </li>))}
                </ul>
            </div>
        }</div>
    )
}

export default Detail;