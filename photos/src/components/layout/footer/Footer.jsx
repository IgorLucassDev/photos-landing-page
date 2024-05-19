import styles from './Footer.module.css'

export default () =>{
    return(
        <>
            <div className={styles.Footer}>
                <div className={styles.copy}>
                    <p>© NayFotografias - Todos os direitos reservados.</p>
                    <p>Created By: <a href="#">IgorLucassDev</a></p>
                </div>
            </div>
        </>
    )
}