import React, { useState } from "react";
import './Videocard.css';
import ManImg from "../../Assets/img_1_long.jpg";
import VideoModal from "../Video Modal/VideoModal";

function Videocard(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
    <div className="card mb-3 main-card-container" style={{maxWidth: '100%', padding: '9%'}}>
        <div className="row g-0 videocard-container">
            <div className="col-md-6 videocard-img-container">
                <img src={ManImg} className="img-fluid" alt="..."/>
            </div>
            <div className="col-md-6 videocard-text-container ">
                <div className="card-body">
                    <h2 className="card-title video-heading">Welcome To Our Website</h2>
                    <p className="card-text video-para1">Far far away, behind the word mountains, far from the countries <br/>Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.<br/><br/>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <p className="card-text video-para2 "  onClick={openModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16 16">
                            <path className="svg-circle"  d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
                        </svg> WATCH THE VIDEO</p>
                </div>
            </div>
        </div>
        {isModalOpen && <VideoModal isOpen={isModalOpen} onClose={closeModal}/>}
    </div>

    );
};

export default Videocard;
