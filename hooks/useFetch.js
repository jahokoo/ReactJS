import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
function useFetch(data,category) {

    const KEY = "b20a8201e48fcb6dd7d605b15aacb7ec";
    const DATA_URL = `https://api.themoviedb.org/3/`;
    const [loading, setLoading] = useState(true);
    const [api, setApi] = useState([]);
    const [api2,setApi2] = useState([]); 
    const getMovies = async () => {
        const json = await (
            await fetch(
                `${DATA_URL}${data}/${category}?api_key=${KEY}`)
        ).json();
        setApi(json.results);
        setApi2(json.results);
        setLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, []);

    return {loading,api,api2}
}
export default useFetch;