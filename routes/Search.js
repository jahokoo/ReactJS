import Loader from "../components/Loader";
import Movie from "../components/Movie";
import {useState,useEffect} from "react"
import { DATA_URL, KEY } from "./Home";

function Search() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const onChange =(e)=>{
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


    const filterMovie = movies.filter(movie =>{
        return movie.title.includes(search)
    })

    
    return (
        <div>{loading ? <Loader /> :
            <div>
                <input type="text" value={search} onChange={onChange} />
                <div>

                {movies.map(movie => <div><span>{movie.title}</span> 
              <span>{}</span> </div> )}
                 </div>

            </div>
        }
        </div>

    )

}
export default Search;