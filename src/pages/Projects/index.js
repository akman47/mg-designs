import React, { useState } from 'react';
import project1 from '../../assets/images/P1/1.jpg';
import project2 from '../../assets/images/P2/2.jpg';
import project3 from '../../assets/images/P3/2.jpg';
import project4 from '../../assets/images/P4/2.jpg';
import project5 from '../../assets/images/P5/3.jpg';
import project6 from '../../assets/images/P6/8.jpg';
import Modal from '../Modal';

function Portfolio() {
    const [projects] = useState([
        {
            name: '1',
            description: '',
            main: '1',
            photoCount: 6
        },
        {
            name: '2',
            description: 'Gulf Coast Vascular',
            main: '2',
            photoCount: 8
        },
        {
            name: '3',
            description: '',
            main: '2',
            photoCount: 7
        },
        {
            name: '4',
            description: 'Trimar',
            main: '2',
            photoCount: 8
        },
        {
            name: '5',
            description: 'Trimar',
            main: '3',
            photoCount: 4
        },
        {
            name: '6',
            description: '',
            main: '8',
            photoCount: 9
        },

    ])

    const [currentProject, setCurrentProject] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);

    function toggleModal(project) {
        setCurrentProject(project);
        setIsModalOpen(!isModalOpen);
    }

    return (
        <section>
            {isModalOpen && <Modal currentProject={currentProject} onClose={toggleModal} />}
             <div className="flex-row flex-wrap justify-center">
                {projects.map((project) => {
                    const imgSrc=require(`../../assets/images/P${project.name}/${project.main}.jpg`);
                    return (
                    <div className="project-card" 
                        onClick={() => toggleModal(project)} 
                        key={project.name}>
                        <img src={imgSrc.default} alt="" />
                        <span>{project.description}</span>
                    </div>
                )})}
            </div>
        </section>
    )
}

export default Portfolio;