import Movie from "../components/Movie";
import {useState,useEffect} from "react";

export const KEY = "b20a8201e48fcb6dd7d605b15aacb7ec";
export const URL = "https://api.themoviedb.org/3/movie/";
function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([])
    const getMovies = async () => {
        const json = await (
            await fetch(
                `${URL}popular?api_key=${KEY}`)
        ).json();
        setMovies(json.results);
        setLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, [])
console.log(movies)
    return (
        <div>
            {loading ? <h1>Loading...</h1> :
                <div>{movies.map(movie =>
                    <Movie
                    id={movie.id}
                    key={movie.id}
                    poster_path={movie.poster_path}
                    title={movie.title}
                    overview={movie.overview}
                    genre_ids={movie.genre_ids}
                    />)} </div>}
        </div>
    );
}

export default Home;