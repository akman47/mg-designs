import React from 'react';
import bioImage from '../../assets/images/mk-bio.jpg';

function About() {
    return (
        <section className="bio-card">
            <h2>The Company</h2>
                <div className="about-firm">
                M.G. Designs, LLC is a small established commerical interior design firm, proudly serving the Houston area for over 20 years.
                We specialize in tenant finish projects for office, healthcare, and retail industries.
                We are a minority owned firm. <br></br>
                Our mission is to provide efficient and timely results with honest and straightforward assessments.
                We collaborate with our clients on over 100 projects each year and we are commited to exceed client expectations.
            </div>
            <h2>The Founder</h2>
                <img src={bioImage} className="bio-img" alt="Melissa Kuliska" />
                <p className="bio">
                    Melissa Kuliska is the senior designer and owner of MG Designs, LLC. She studied Interior Architecture and received her Bachelor of Arts degree from Spring Garden College in Philadelphia.
                    After working in the design field for several major architectural firms, Melissa founded M.G. Designs LLC in 2004.
                    She has over 25 years of experience in interior architectural design, build, renovation, and project management. Through her talent and innovative leadership, Melissa guides her design 
                    team to meet any challenges and client's needs to create a contemporary space of timeless quality. A visit to any of the sites on her extensive list of commercial projects give the sense 
                    that she is much more than a designer.<br /><br />

                    Her professional training includes programming, space planning, and detailed drawings to full construction documents for permits that emphasize the architecture of the interior.
                    Melissa is noted for her attention to the details that make a space unique such as texture, lighting, color, furnishings, and functional ease.<br /><br />

                    In her free time, Melissa loves to bike, plant flowers, and hike with her dog, Rory.<br /><br />                    
                    </p>
        </section>
    )
}

export default About;