import Loader from "../components/Loader";
import Movie from "../components/Movie";
import { useState, useEffect } from "react"
import { DATA_URL, KEY } from "./Home";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import MovieSearch from "../components/MovieSearch";
import styles from "../css/Search.module.css";
import TopButton from "../components/Topbutton";

function Search() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const onChange = (e) => {
        setSearch(e.target.value)
    }
    const getMovie = async () => {
        const json = await (
            await fetch(`${DATA_URL}popular?api_key=${KEY}`)
        ).json();
        setLoading(false)
        setMovies(json.results)
    };
    useEffect(() => {
        getMovie();
    }, []);

 
    const filterTitle = movies.filter((p) => {
        return p.title.replace(" ", "").toLocaleLowerCase().includes(search.toLocaleLowerCase().replace(" ", ""))
    })


    return (
        <div>{loading ? <Loader /> :
            <div>
                <Header /><TopButton/>
                <SearchBar value={search} onChange={onChange} />
                <div className={styles.search__container}>
                        {filterTitle.map(movie =>
                            <MovieSearch className={styles.search__movie}
                                id={movie.id}
                                key={movie.id}
                                poster_path={movie.poster_path}
                                title={movie.title}
                                average={movie.vote_average}
                                overview={movie.overview}
                            />
                        )}
                </div>
            </div>

        }
        </div>

    )

}
export default Search;