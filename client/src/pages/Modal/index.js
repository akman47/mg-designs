import React from 'react';

function Modal({onClose, currentProject}) {
    const { name, description, photoCount } = currentProject;

    function generatePhotoCount(photoCount){
        const photoNum = []; 
        let count = photoCount;
            while(count > 0) {
                photoNum.push(count);
                count--;
            }

        return photoNum;
    }

    const count = generatePhotoCount(photoCount);

    return (
        <div className="modal-project">
            <div className="modal-container">
                <h3>{description}</h3>
                <div className="flex-row flex-wrap space-around">
                {count.map(num => {
                    const imgSrc=require(`../../assets/images/P${name}/${num}.jpg`);
                    return (
                        <img 
                            src={imgSrc.default}
                            alt={description}
                            className="project-image"
                            key={num}
                        />
                    )
                })}
                </div>
                <button type="button" onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

export default Modal;