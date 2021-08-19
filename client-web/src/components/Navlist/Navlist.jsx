import React from 'react';
import "./Navlist.css";

const Navlist = ({title, iconPath, open}) => {
    const renderNavList = () => {
        if (open) {
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
        } else {
            return (
                <a className="navlist-container" href="#">
                    <div className="navlist-flex-container">
                        <img className="navlist-icon" src={iconPath}/>
                        <div className="navlist-link-wrapper" style={{width:"0px", paddingRight:"0px"}}>
                            <div className="navlist-link" style={{visibility:"hidden"}}>{title}</div>
                        </div>
                        <div className="navlist-drop-button">▾</div>
                    </div>
                </a>
            )
        }
    }
    return (
        renderNavList()
    )
}

export default Navlist;