import React, { useState } from 'react';
import "./NavMonthly.css";
import { getMonthDays, weekDay, monthList } from "./Calendar.js";

const NavMonthly = ({open}) => {
    const nowDate = new Date();
    const [theFirst, setFirst] = useState(new Date(nowDate.getFullYear(), nowDate.getMonth(), 1));

    const renderClassName = () => {
        return open ? "" : "close";
    }

    const onClickLeft = () => {
        let displayeYear = theFirst.getFullYear();
        let displayedMonth = theFirst.getMonth() - 1;
        if (displayedMonth === -1) {
            displayeYear--;
            displayedMonth = 11;
        }
        setFirst(new Date(displayeYear, displayedMonth, 1))
    }

    const onClickRight = () => {
        let displayeYear = theFirst.getFullYear();
        let displayedMonth = theFirst.getMonth() + 1;
        if (displayedMonth === 12) {
            displayeYear++;
            displayedMonth = 0;
        }
        setFirst(new Date(displayeYear, displayedMonth, 1))
    }

    const renderMonthTitle = () => {
        const monthYearTitle = `${monthList[theFirst.getMonth()]}, ${theFirst.getFullYear()}`;
        const tempPath = window.location.origin + "/logo192.png";
        return (
            <div className="month-title-wrapper">
                <div className="month-title-container">
                    <img src={tempPath} alt="left-arrow" className="arrow-button left" onClick={onClickLeft} />
                    <div>{monthYearTitle}</div>
                    <img src={tempPath} alt="right-arrow" className="arrow-button right" onClick={onClickRight} />
                </div>
            </div>
        )
    }

    const renderTiles = (days) => {
        const emptyArray = Array(theFirst.getDay()).fill(" ");
        const daysArray = Array.from({length: days}, (_, i) => i + 1);
        return (
            <div className="tile-container">
                {weekDay.map(day => <div className="weekday-tile">{day}</div>)}
                {emptyArray.map(() => <div className="day-tile empty"></div>)}
                {daysArray.map(day => <div className="day-tile">{day}</div>)}
            </div>
        )
    }

    const renderCalendar = () => {
        const monthDays = getMonthDays(theFirst);
        const thisMonthDays = monthDays[theFirst.getMonth()];
        return (
            <div className="calendar-content-container">
                {renderTiles(thisMonthDays)}
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