import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DATA_URL, KEY } from "./Home"
import Header from "../components/Header";
import Loader from "../components/Loader";
import Details from "../components/Details";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState([]);
    const { id } = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(`${DATA_URL}${id}?api_key=${KEY}`)
        ).json();
        setDetails(json);
        setLoading(false);
       
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>{loading ? <Loader /> :
            <div> <Header />
                    <Details
                    title={details.title}
                    backdrop_path={details.backdrop_path}
                    poster_path={details.poster_path}
                    release_date={details.release_date}
                    runtime={details.runtime}
                    vote_average={details.vote_average}
                    genres={details.genres}
                    overview={details.overview}
                        />
            </div>
        }</div>
    )
}

export default Detail;