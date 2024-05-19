
import styles from './ServiceComponent.module.css'


export default ({serviceImage, serviceTitle, serviceDescription}) =>{
    return(
        <>
            <div className={styles.Service}>
                <div className={styles.serviceImage}>
                    <img src={serviceImage} alt="Service IMG" />
                </div>
                <div className={styles.serviceTitle}>
                    <h3>{serviceTitle}</h3>
                </div>
                <div className={styles.serviceDescription}>
                    <p>{serviceDescription}</p>
                </div>
                <input className={styles.serviceButton} type="button" value="Contratar" />
            </div>
        </>
    )
}