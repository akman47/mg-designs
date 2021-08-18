import React from 'react';
import service from '../../assets/images/services.jpg';
import client from '../../assets/images/clients.jpg';
import plans from '../../assets/images/plans.jpg';


function Services() {
    return (
        <section className="services">
            <div className="flex-row justify-center align-item-center">
                <div className="img-container flex-column">
                    <img src={service} alt="Breakroom redesigned"></img>
                    <img src={plans} alt='building plans'></img>
                    <img src={client} alt='OBGYN waiting room'></img>
                </div>
        
                <div className="service-container">
                <ul><h3>Our Services:</h3>
                    <li>As-Builts</li>
                    <li>Field verify existing structure per BOMA standards</li>
                    <li>Space planning and interior design</li>
                    <li>Value engineering</li>
                    <li>Construction documents</li>
                    <li>Permit Application and follow-up</li>
                    <li>TDLR (ADA) Compliancy</li>
                    <li>Code Assessments</li>
                    <li>Due-Diligence</li>
                    <li>Finish selection and millwork detailing</li>
                </ul>
                <br></br>
                <br></br>

                <ul><h3>Our Clients:</h3>
                    <li>Transwestern</li>
                    <li>Licoln Harris</li>
                    <li>RPD Properties</li>
                    <li>Fuller Properties</li>
                    <li>Parkway Properties</li>
                    <li>Altera Properties</li>
                    <li>Lillibridge Healthcare Services</li>
                </ul>
            </div>
            </div>

        </section>
    )
}

export default Services;