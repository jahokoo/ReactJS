import { useEffect } from "react";
import {useParams} from "react-router-dom";
import {URL,KEY} from "./Home"
function Detail(){
    const {id} = useParams();
    const getMovie = async() =>{
        const json = await (
            await fetch(`${URL}${id}?api_key=${KEY}`)
        ).json();
    };
    useEffect(() => {
        getMovie();
    },[]);
    return <h1>Detail</h1>;
}

export default Detail;