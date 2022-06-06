import Movie from "../components/Movie";
import { useState, useEffect } from "react";
import Header from "../Header";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation"
import "swiper/css/mousewheel"
import "swiper/css/scrollbar"
// import required modules
import { EffectCoverflow, Navigation,Mousewheel,Scrollbar} from "swiper";


export const KEY = "b20a8201e48fcb6dd7d605b15aacb7ec";
export const DATA_URL = "https://api.themoviedb.org/3/movie/";
function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([])
    const getMovies = async () => {
        const json = await (
            await fetch(
                `${DATA_URL}popular?api_key=${KEY}`)
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
                <div id="header"><Header /> </div>}

<Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={4}
        coverflowEffect={{
          rotate: 10, // 회전각도
          stretch: 0, 
          depth: 100, // 깊이감도
          modifier: 3,
          slideShadows: true,
        }}
        navigation={true}
        mousewheel={true}
        scrollbar={true}
        modules={[EffectCoverflow,Navigation,Mousewheel,Scrollbar]}
        className="mySwiper"
      >
            <div className="container">
            
                {movies.map(movie =>
                <SwiperSlide>
                    <Movie
                        id={movie.id}
                        key={movie.id}
                        poster_path={movie.poster_path}
                        title={movie.title}
                        average={movie.vote_average}
                    /> </SwiperSlide>)} </div>
</Swiper>


        </div>
    );
}


export default Home;