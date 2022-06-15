import styles from "../css/Home.module.css"


function Tap({onChange,category}){

    return(
        <div className={styles.top_rates_wraper}>
        <ul><h2 className={styles.top_rates}>Now On </h2>
        {category.map((val, idx) => {
            return (
                <li className={styles.top_category} 
                key={idx}onChange={onChange}> {val.name}</li>)
        }
        )}
        </ul>
        </div>
    )
}export default Tap;