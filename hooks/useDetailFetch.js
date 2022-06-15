import {useState,useEffect} from "react"
import { useParams } from "react-router-dom";
function useDetailFetch(data){
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState([]);
    const { id } = useParams();
    
    const KEY = "b20a8201e48fcb6dd7d605b15aacb7ec";
    const DATA_URL = `https://api.themoviedb.org/3/`;
    const URL =`${DATA_URL}${data}/${id}?api_key=${KEY}`
    
    const getMovie = async () => {
        const json = await (
            await fetch(URL)
        ).json();
        setDetails(json);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return {loading,details,data}
    
} 

export default useDetailFetch;