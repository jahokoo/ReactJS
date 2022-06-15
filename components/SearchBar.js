import PropTypes from "prop-types"
import styles from "../css/Search.module.css"
function SearchBar({search,onChange}) {
   
    return (
        <div className={styles.input__box}>
<input
    className={styles.input}
    type="text"
    value={search}
    onChange={onChange}
    placeholder="Search here"/>       
     </div>
    )
}
SearchBar.propTypes={
// search: PropTypes.any.isRequired,
onChange:PropTypes.func.isRequired,
}

export default SearchBar;