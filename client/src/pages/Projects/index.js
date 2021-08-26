import React, { useState } from 'react';
import Modal from '../Modal';
import Display from '../Carousel';

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
            {isModalOpen && <Display currentProject={currentProject} onClose={toggleModal} />}
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