import React from 'react';
import "./Navlist.css";

const Navlist = ({title, iconPath, dropbuttonPath, open}) => {

    const renderIconImage = () => {
        return iconPath ? <img className="navlist-icon" src={iconPath} alt="navlist-icon"/> : null;
    }

    const renderWrapperStyle = () => {
        return open ? {} : {width:"0px", paddingRight:"0px"};
    }

    const renderLinkStyle = () => {
        return open ? {} : {visibility:"hidden"};
    }

    // [TODO] icon 에셋 저장하면 이 부분 활성화시키기
    // const renderDropButton = () => {
    //     return dropbuttonPath ? <img className="navlist-drop-button" src={dropbuttonPath} alt="dropdown-button" /> : null;
    // }

    const renderNavList = () => {
        return (
            <a className="navlist-container" href="#">
                <div className="navlist-flex-container">
                    {renderIconImage()}
                    <div className="navlist-link-wrapper" style={renderWrapperStyle()}>
                        <div className="navlist-link" style={renderLinkStyle()}>{title}</div>
                    </div>
                    {/* {renderDropButton()} */}
                    <div className="navlist-drop-button">▾</div>
                </div>
            </a>
        )
    }

    return (
        renderNavList()
    )
}

export default Navlist;