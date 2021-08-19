import React from 'react';
import "./Navlist.css";

const Navlist = ({title, iconPath}) => {
    return (
        <a className="navlist-container" href="#">
            <div className="navlist-flex-container">
                <img className="navlist-icon" src={iconPath}/>
                <div className="navlist-link-wrapper">
                    <div className="navlist-link">{title}</div>
                </div>
                <div className="navlist-drop-button">▾</div>
            </div>
        </a>
    )
}

export default Navlist;