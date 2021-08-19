import React from 'react';
import "./NavProfile.css";

const NavProfile = ({open}) => {
    const tempPath = window.location.origin + "/logo512.png";
    const tempName = "JuYeon OH";
    const tempEmail = "jh5smile@naver.com";

    const renderClassName= () => {
        return open || open === undefined ? "" : "close";
    }

    return (
        <div className={`navprofile-container ${renderClassName()}`} >
            <div className="navprofile">
                <img className="navprofile-image" src={tempPath} alt="profile image" />
            </div>
            <div className="navprofile-name">Hi, {tempName}</div>
            <div>{tempEmail}</div>
        </div>
    )
}

export default NavProfile;