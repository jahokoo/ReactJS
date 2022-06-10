import Movie from "../components/Movie";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Loader from "../components/Loader";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { EffectCoverflow, Navigation, Mousewheel } from "swiper";
// css
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import styles from "../css/styles.css";

export const KEY = "b20a8201e48fcb6dd7d605b15aacb7ec";
export const DATA_URL = "https://api.themoviedb.org/3/movie/";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
 
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

    return (
        <div>
            {loading ? <Loader/>:
                <div><Header/>

             <Swiper
             effect={"coverflow"}
             grabCursor={true}
             centeredSlides={true}
             slidesPerView={2} // 
             coverflowEffect={{
                 rotate: 10, // 회전각도
                 stretch: 0,
                 depth: 100, // 깊이감도
                 modifier: 2, // 
                 slideShadows: true,//선택한 부분 밝게 나머지는 그늘지게 해준다.
             }}
             navigation={true} // 네비게이션 버튼
             mousewheel={true} // 마우스 휠
             modules={[EffectCoverflow, Navigation, Mousewheel]} // 모듈추가
             className="mySwiper"
             breakpoints={{
                 768:{
                     slidesPerView:3
                 },
                 1024:{
                    slidesPerView:4
                 }
             }}
         > 
                 {movies.map(movie =>
                     <SwiperSlide>
                         <Movie
                             id={movie.id}
                             key={movie.id}
                             poster_path={movie.poster_path}
                             title={movie.title}
                             average={movie.vote_average}
                         /> </SwiperSlide>)} 
         </Swiper> 
         </div>
            }
            
        </div>

   
    );
        }


export default Home;