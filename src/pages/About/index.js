import React from 'react';
import bioImage from '../../assets/images/mk-bio.jpg';

function About() {
    return (
        <section>
            <img></img>
            <div className="about-firm">
                MG Designs, LLC is a small Commercial Interior design studio that specializes in tenant finish projects for the office, healthcare, and retail industries. 
                Our firm strategy is to provide efficient and timely results with honest and straightforward assessments. We have collaborated with our clients on more than 100 projects each year.
                We are committed to ensure client satisfaction.
            </div>
            <div className="bio-card flex-row space-around align-item-center">
                <img src={bioImage} className="bio-img" alt="Melissa Kuliska" />
                <p className="bio flex-wrap">
                    Melissa Kuliska is the senior designer and owner of MG Designs, LLC. She studied Interior Architecture and recieved her Bachelor of Architecture from Spring Garden College in Philadelphia.
                    In her free time, Melissa loves to bike, plant flowers, and hike with her dog, Rory.
                </p>
            </div>
        </section>
    )
}

export default About;