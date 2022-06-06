import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../css/Movie.moduel.css";



function Movie({ poster_path, title, average, id }) {
    return (
    
          
        <div>
                <div id="movie">
                    <Link to={`/movie/${id}`}>
                        <div className="img_container">
                            
                            <img className="poster" src={"https://image.tmdb.org/t/p/w300" + poster_path} alt={title} />
                            
                        </div>
                        </Link><h4>
                            {title}
                        </h4>
                    <span>⭐️ {average}</span>
             
                </div>
         
        </div>
       
    
    );
}
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    average: PropTypes.number.isRequired,
}
export default Movie;