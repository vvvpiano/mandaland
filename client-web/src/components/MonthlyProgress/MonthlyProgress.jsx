import React from 'react'
import './MonthlyProgress.css'

const MonthlyProgress = (props) => {
    const progressStyle = {
        height: `${props.progress}px`,
    }
    return (
        <div className="wrap-progress">
            {/* <progress value="70" max="100">70 %</progress> */}
            <div className="progress-bar" style={progressStyle}></div>
            <span className="english">{props.month}</span>
        </div>
    )
}

export default MonthlyProgress
