import React from "react";
import './ImageCard.css';

function ImageCard({className, image, heading1Text, heading2Text, para, heading1Display}){
    const compData = {
        image: image || "https://preview.colorlib.com/theme/hepta/images/img_1.jpg.webp",
        heading1Text: heading1Text || "February 26, 2018",
        heading2Text: heading2Text || "45 Best Places To Unwind",
        heading1Display: heading1Display || "true",
    };

    return (
        <div className={`card card-main ${className}`}>
        <img src={compData.image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h6 className={`card-title card-heading ${(compData.heading1Display==="true") ? 'heading1-display' : 'heading1-hide'}`}>{compData.heading1Text}</h6>
            <h5 className="card-title card-heading-2">{compData.heading2Text}</h5>
            <p className={`card-text ${(para==="hidden") ? "card-para-hidden" : "card-para-display"}`}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        </div>
);
};
export default ImageCard;