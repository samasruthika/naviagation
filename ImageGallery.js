import React from 'react';
import './ImageGallery.css'; // Import CSS file

const ImageGallery = () => {
    const openLightbox = (imageSrc) => {
        document.getElementById("lightbox").style.display = "block";
        document.getElementById("lightboxImg").src = imageSrc;
    };

    const closeLightbox = () => {
        document.getElementById("lightbox").style.display = "none";
    };

    return (
        <div className="gallery">
            <div className="thumbnails">
                <img src="Erodejunction.jpg" onClick={() => openLightbox('Erodejunction.jpg')} alt="Image 1" />
                <img src="kodiveri.jpg" onClick={() => openLightbox('kodiveri.jpg')} alt="Image 2" />
                {/* Add more images as needed */}
            </div>
            <div id="lightbox" className="lightbox" onClick={closeLightbox}>
                <span className="close">&times;</span>
                <img id="lightboxImg" className="lightbox-content" src="" alt="Lightbox Image" />
            </div>
        </div>
    );
};

export default ImageGallery;
