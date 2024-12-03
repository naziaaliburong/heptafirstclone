import React from "react";
import './ScrolldownBtn.css';

function ScrolldownBtn({onScrollToComponent}){
    return (
        <div className="scroll-btn-container">
        <button className="scrolldown-btn" onClick={onScrollToComponent}>
            <i className="bi bi-caret-down-fill"></i>
             <span className="scroll-btn-text">SCROLL DOWN</span>
        </button>
        </div>
    );
};

export default ScrolldownBtn;
