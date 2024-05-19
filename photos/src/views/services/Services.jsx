import styles from './Services.module.css';

import ServiceComponent from './components/ServiceComponent';

import Service1 from '/static/service1.jpg';
import Service2 from '/static/service2.jpg';
import Service3 from '/static/service3.jpg';


export default () =>{
    return(
        <>
            <div id="services" className={styles.Container}>

                <div className={styles.titleContainer}>
                    <h1 className="title">Serviços</h1>
                    <p>Confira os nossos serviços disponiveis.</p>
                </div>

                <div className={styles.servicesContainer}>
                    <ServiceComponent
                        serviceImage={Service2}
                        serviceTitle='FOTOGRAFIAS DE CRIANÇAS'
                        serviceDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus id similique eaque blanditiis suscipit natus sed.'
                    />

                    <ServiceComponent 
                        serviceImage={Service1}
                        serviceTitle='FOTOGRAFIAS DE CASAMENTO'
                        serviceDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus id similique eaque blanditiis suscipit natus sed.'
                    />

                    <ServiceComponent
                        serviceImage={Service3}
                        serviceTitle='FOTOGRAFIAS DE GESTANTES'
                        serviceDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus id similique eaque blanditiis suscipit natus sed.'
                    />
                </div>
            </div>
        </>
    )
}