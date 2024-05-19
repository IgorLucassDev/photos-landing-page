import styles from './Contact.module.css'

// Whatsapp and Instagram Logos
import Whatsapp from '/static/whatsapp.png'
import Instagram from '/static/instagram.png'

export default () =>{
    return(
        <>
            <div id="contact" className={styles.Container}>
                <div className={styles.titleContainer}>
                    <h1 className='title'>Contato</h1>
                </div>
                <div className={styles.Content}>
                    <h2>Deseja tirar alguma duvida?</h2>
                    <p>Entre em contato nas nossas redes sociais</p>
                </div>
                <div className={styles.socialBanners}>
                    <a href="#" target='_blank'>{/* replace href with your Whatsapp api */}
                        <img className={styles.whatsapp} src={Whatsapp} alt="Whatsapp Banner" />
                    </a>
                    <a href='#' target='_blank'> {/* replace href with your instagram Profile Link */}
                        <img className={styles.insta} src={Instagram} alt="Instagram Banner" />
                    </a>
                </div>

                <div className={styles.map}>
                    <iframe width="80%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=80%25&amp;height=300&amp;hl=en&amp;q=Belo%Horizonte%20-%20MG+(Location)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
            </div>
        </>
    )
}