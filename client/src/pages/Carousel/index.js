import { Carousel } from 'react-carousel-minimal';

function Display({onClose, currentProject}) {
    const data = []

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

    count.map((num, i) => {
        const imgSrc=require(`../../assets/images/P${name}/${num}.jpg`);
        data.push({
            image: imgSrc.default
        });
    });

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold'
    }

    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold'
    }

    return (
        <div className="carousel">
            <span className="carousel-close" onClick={onClose}>[x]</span>
            <div style={{ textAlign: "center" }}>
                <h2>{description}</h2>
                <div style={{
                    padding: "0 20px"
                    }}>
                    <Carousel
                        data={data}
                        time={4000}
                        width="950px"
                        height="550px"
                        captionStyle={captionStyle}
                        radius="10px"
                        slideNumber={true}
                        slideNumberStyle={slideNumberStyle}
                        captionPosition="bottom"
                        automatic={true}
                        dots={true}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        slideBackgroundColor="darkgrey"
                        slideImageFit="cover"
                        thumbnails={true}
                        thumbnailWidth="100px"
                        style={{
                            textAlign: "center",
                            maxWidth: "850px",
                            maxHeight: "500px",
                            margin: "40px auto",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Display;