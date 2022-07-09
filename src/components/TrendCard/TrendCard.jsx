import styles from "./trendcard.module.css"
import { TrendData } from "../../Data/TrendData"


const TrendCard = () => {
    return (
        <div className={styles.TrendCard}>
            <h3>Trends for you</h3>
            {TrendData.map((trend,index) => {
                return (
                    <div key={index} className={styles.trend}>
                        <span className={styles.trend_span1}>#{trend.name}</span>
                        <span className={styles.trend_span2}>{trend.shares}k shares</span>
                    </div>
                )
            })}

        </div>
    )
}

export default TrendCard
