import Loader from "../components/Loader";
import { useEffect, useRef, useState} from "react"
// component
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Popular from "../components/Popular";
import TopButton from "../components/TopButton";

//css
import styles from "../css/Search.module.css";

 //hooks
import useTitle from "../hooks/useTitle";
import useFetch from "../hooks/useFetch";



function Search() {
    useTitle("Movies")
    const { loading, movie ,setPageNum} = useFetch("movie", 'popular');
    const [search, setSearch] = useState("");
    
    const onChange = (e) => {
        setSearch(e.target.value)
    }

    const filterTitle = movie.filter((p) => {
        return p.title.replace(" ", "").toLocaleLowerCase()
        .includes(search.toLocaleLowerCase().replace(" ", ""))
    });


    const searchMovies = () =>{
        if(search === ""){
            return
        }else if(filterTitle.length >= 1){
            return <span>Found <b>{filterTitle.length}</b> titles</span>
        }else{
            return <span>Couldn't find the titles</span>
        }
    };
 
    return (
        <div>{loading ? <Loader /> :
            <div>
                <Header /> <TopButton />
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
                            title={movie.title}
                            vote_average={movie.vote_average}
                            category="movie"
                        />
                    )}
                
                </div>
                </div>

        }
        </div>

    )

}
export default Search;