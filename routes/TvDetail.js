import Header from "../components/Header";
import Loader from "../components/Loader";
import useDetailFetch from "../hooks/useDetailFetch"
import Details from "../components/Details";

function TvDetail() {
    const {loading,details} = useDetailFetch('tv')
    return (
        <div>{loading ? <Loader /> :
            <div> <Header />
                    <Details
                    title={details.name}
                    backdrop_path={details.backdrop_path}
                    poster_path={details.poster_path}
                    release_date={details.first_air_date}
                    runtime={details.episode_run_time}
                    vote_average={details.vote_average}
                    genres={details.genres}
                    overview={details.overview}
                        />
                        
            </div>
        }</div>
    )
}

export default TvDetail;