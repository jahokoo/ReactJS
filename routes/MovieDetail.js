
import Header from "../components/Header";
import Loader from "../components/Loader";
import Details from "../components/Details";
import useDetailFetch from "../hooks/useDetailFetch";
function MovieDetail() {
    const { loading, details } = useDetailFetch("movie");
    return (
        <div>{loading ? <Loader /> :
            <div> <Header />
                <Details
                    title={details.title}
                    backdrop_path={details.backdrop_path}
                    poster_path={details.poster_path}
                    release_date={details.release_date}
                    runtime={details.runtime}
                    vote_average={details.vote_average}
                    genres={details.genres}
                    overview={details.overview}
                />
            </div>
        }</div>
    )
}

export default MovieDetail;