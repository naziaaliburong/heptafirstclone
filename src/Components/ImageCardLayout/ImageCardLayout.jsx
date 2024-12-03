import React from "react";
import './ImageCardLayout.css';
import ImageCard from "../ImageCard/ImageCard";

function ImageCardLayout(){
   
    return ( 
        <div className="grid-container">
            <ImageCard />
            <ImageCard image="https://preview.colorlib.com/theme/hepta/images/img_2.jpg.webp"/>
            <ImageCard className="large" image="https://preview.colorlib.com/theme/hepta/images/img_3.jpg.webp"/>
        </div>
);
};
export default ImageCardLayout;