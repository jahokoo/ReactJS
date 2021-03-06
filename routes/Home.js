import Movie from "../components/Movie";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Loader from "../components/Loader";
import useTitle from "../hooks/useTitle"
import useFetch from "../hooks/useFetch";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { EffectCoverflow, Navigation, Mousewheel } from "swiper";
// css
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import styles from "../css/Home.module.css"


function Home() {
    useTitle("PopMovie")
    const { loading, movie} = useFetch('movie', 'now_playing');
    const { tv } = useFetch('tv', 'on_the_air')
    const [taps, setTaps] = useState(0);

    const tapClick = (index) => {
        setTaps(index)
    }

    const category=[
        {
            name: "Movie",
            content: movie.map((movie) => <SwiperSlide>
                <Movie 
                category="movie"
                id={movie.id}
                key={movie.id}
                    poster_path={movie.poster_path}
                    title={movie.title}
                    vote_average={movie.vote_average}
                /></SwiperSlide>)
        }, {
            name: "TVshow",
            content: tv.map((tv) => <SwiperSlide>
                <Movie
                category="tv"
                id={tv.id}
                key={tv.id}
                    poster_path={tv.poster_path}
                    title={tv.name}
                    vote_average={tv.vote_average}
                /></SwiperSlide>)
        }];
    
       
    return (
        <div>
            {loading ? <Loader /> :
                <div><Header />
                    <div className={styles.top_rates_wraper}>
                        <ul><h2 className={styles.top_rates}>Now On</h2>
                        {category.map((val, idx) => {
                            return (
                                <li className={styles.top_category} 
                                key={idx} onClick={() => tapClick(idx)}> {val.name}</li>)
                        }
                        )}
                        </ul>
                    </div>

                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={2} // 
                        coverflowEffect={{
                            rotate: 10, // ????????????
                            stretch: 0,
                            depth: 100, // ????????????
                            modifier: 2, // 
                            slideShadows: true//????????? ?????? ?????? ???????????? ???????????? ?????????.
                        }}
                        navigation={true} // ??????????????? ??????
                        mousewheel={true} // ????????? ???
                        modules={[EffectCoverflow, Navigation, Mousewheel]} // ????????????
                        className="mySwiper"
                        breakpoints={{
                            768: {
                                slidesPerView: 3
                            },
                            1024: {
                                slidesPerView: 4
                            }
                        }}
                    >
                        {category[taps].content}

                    </Swiper>
                </div>
            }

        </div>


    );
}


export default Home;