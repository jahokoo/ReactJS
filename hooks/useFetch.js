import {useState,useEffect} from "react";
function useFetch(data,category) {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [pageNum,setPageNum] = useState("1")
    const [tv,setTv] = useState([]); 

    const KEY = "b20a8201e48fcb6dd7d605b15aacb7ec";
    const DATA_URL = `https://api.themoviedb.org/3/`;
    const URL = `${DATA_URL}${data}/${category}?api_key=${KEY}`

    const getMovies = async () => {
        const json = await (
            await fetch(`${URL}&page=${pageNum}`)
        ).json();
        setMovie(json.results);
        setTv(json.results);
        setLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, []);

    return {loading,movie,tv,setPageNum}
}
export default useFetch;