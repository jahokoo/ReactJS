import Loader from "../components/Loader";
import useFetch from "../hooks/useFetch";
import Header from "../components/Header";
import useTitle from "../hooks/useTitle"
import Popular from "../components/Popular"
import TopButton from "../components/TopButton";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import styles from "../css/Search.module.css";
function TV() {
    useTitle("TV")
    const { loading, tv } = useFetch("tv", 'popular');
    const [search, setSearch] = useState("");

    const filterTitle = tv.filter((p) => {
        return p.name.replace(" ", "").toLocaleLowerCase()
            .includes(search.toLocaleLowerCase().replace(" ", ""))
    });
    const searchMovies = () => {
        if (search === "") {
            return
        } else if (filterTitle.length >= 1) {
            return <span>Found <b>{filterTitle.length}</b> titles</span>
        } else {
            return <span>Couldn't find the titles</span>
        }
    };

    const onChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div>
            {loading ? <Loader /> : 
            <div>
                <Header />
                <TopButton/>
                <SearchBar value={search} onChange={onChange} />
                <div className={styles.search__find}>
                    {searchMovies()}
                </div>

                <div className={styles.search__container}>

                    {filterTitle.map(movie =>
                    
                        <Popular className={styles.search__movie}
                            id={movie.id}
                            key={movie.id}
                            poster_path={movie.poster_path}
                            title={movie.name}
                            vote_average={movie.vote_average}
                            category="tv"
                        />
                    )}
                </div>

            </div>
            

    }
    </div>
        
    )
}

export default TV;