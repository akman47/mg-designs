import React from 'react';
import bioImage from '../../assets/images/mk-bio.jpg';

function About() {
    return (
        <section className="bio-card">
            <h2>The Company</h2>
                <div className="about-firm">
                MG Designs, LLC is a small Commercial Interior design studio that specializes in tenant finish projects for the office, healthcare, and retail industries. 

                M.G. Designs, LLC is an established boutique interior architecture firm proudly serving the Hosuton area for over 15 years.
                We specialize in tenant finish projects for office, healthcare, and retail industries.
                We are a minority owned firm.
                Our mission is to provide efficient and timely results with honest and straightforward assessments.
                We collaborate with our clients on over 100 projects each year and we are commited to exceed client expectations.

            </div>
            <h2>The Founder</h2>
                <img src={bioImage} className="bio-img" alt="Melissa Kuliska" />
                <p className="bio">
                    Melissa Kuliska is the senior designer and owner of MG Designs, LLC. She studied Interior Architecture and recieved her Bachelor of Architecture from Spring Garden College in Philadelphia.
                    She has over 20 years of experience in interior architectural design, build, renovation, and project management.
                    In her free time, Melissa loves to bike, plant flowers, and hike with her dog, Rory.<br /><br />

                    MK is the owner and Principal Project Manager of M.G. Designs, LLC. She brings nearly 25 years of experience in the Commercial Interior Design Industry. <br /><br />
                    
                    She gradutuated from Spring Garden College in Philadephia,, PA. With a Bachelor of Arts Degree in Interior Designn. After working in the design field for serval major architectural firms, Melissa founded M.G. Designs LLCc in 2004.
                    Through her talent and innovative leadership, she  guides the design team in challenging each client and each other. A visit to any of the sites on her extensive list of commercial projects give the sense that she is much more than a designer.
                    The term Interior Architecture more accurately describes how she analyzes the client's needs and translate those needs to create a contemporarry space of timeless quality.
                    Her professional training includes programming, space planning, and detailed drawings to full construction documents for permits that emphasize the architecture of the interior.
                    Melissa is noted for her attention to the details that make a space unique such as texture, lighting, color, furnishings, and functional ease.
                </p>
        </section>
    )
}

export default About;