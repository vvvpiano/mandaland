import React from 'react';
import "./NavMonthly.css";

const NavMonthly = ({open}) => {

    const renderClassName = () => {
        return open ? "" : "close";
    }

    const renderMonthTitle = () => {
        const tempPath = window.location.origin + "/logo192.png";
        return (
            <div className="month-title-wrapper">
                <div className="month-title-container">
                    <img src={tempPath} alt="left-arrow" className="arrow-button left" />
                    <div>June, 2021</div>
                    <img src={tempPath} alt="right-arrow" className="arrow-button right" />
                </div>
            </div>
        )
    }

    const renderCalendar = () => {
        return (
            <div className="calendar-content-container">

            </div>
        )
    }
    return (
        <div className={`navmonthly-container ${renderClassName()}`}>
            <div className="navmonthly-title">Monthly progress</div>
            <div className="calendar-container">
                {renderMonthTitle()}
                {renderCalendar()}
            </div>
        </div>
    )
}

export default NavMonthly;