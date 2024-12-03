import React, { useState, useEffect, useRef } from 'react';
import './VideoModal.css';

const VideoModal = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const hideTimeout = useRef(null);

  useEffect(() => {
    const handleMouseMove = () => {
      setIsVisible(true);
      if (hideTimeout.current) {
        clearTimeout(hideTimeout.current);
      }

      hideTimeout.current = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    };

    document.body.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
      if (hideTimeout.current) {
        clearTimeout(hideTimeout.current);
      }
    };
  }, []);

  return (
    <div
      id="modal-container"
      className={`modal fade ${isOpen ? 'show' : ''}`}
      style={{ display: isOpen ? 'block' : 'none' }}
      tabIndex="-1"
      role="dialog"
    >
      {isVisible && (
      <button type="button" className="btn-close modal-close btn-close-white close-icon" onClick={onClose} aria-label="Close"></button>
      )}
      <div className="modal-dialog modal-lg custom-modal-size" role="document">
        <div className="modal-content custom-modal-size">
          
          <div className="modal-body">
            <iframe
              src="https://player.vimeo.com/video/93951774" // Replace with your Vimeo video link
              width="100%"
              className="iframe-video"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Vimeo Video"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
