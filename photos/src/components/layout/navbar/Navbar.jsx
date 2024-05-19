

import styles from './Navbar.module.css'

import { useState } from "react"

import { IoHome } from "react-icons/io5";
import { IoIosPhotos } from "react-icons/io";
import { MdContacts } from "react-icons/md";

export default () =>{

    const [buttonActive, setButtonActive] = useState('home')

    const handleButtonClick = (buttonId) =>{
        setButtonActive(buttonId)
    }


    return(
        <>
            <nav className={styles.navbarContainer}>
                <ul className={styles.navbarMenuItens}>
                    <li>
                        <a 
                            href="#home" 
                            className={[styles.button, buttonActive === 'home' ? styles.active : ''].join(' ')}
                            onClick={() => handleButtonClick('home')}
                            >
                                <span className={styles.NavIcon}><IoHome/></span>
                                <span className={styles.NavText}>Inicio</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#services" 
                            className={[styles.button, buttonActive === 'services' ? styles.active : ''].join(' ')}
                            onClick={() => handleButtonClick('services')}
                            >
                                <span className={styles.NavIcon}><IoIosPhotos /></span>
                                <span className={styles.NavText}>Serviços</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact" 
                            className={[styles.button, buttonActive === 'contact' ? styles.active : ''].join(' ')}
                            onClick={() => handleButtonClick('contact')}
                            >
                                <span className={styles.NavIcon}><MdContacts /></span>
                                <span className={styles.NavText}>Contato</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}