import React from 'react';
import { Link } from 'react-router-dom';
import './MiniMandalBox.css'

const MiniMandalBox = (props) => {
    return (
        <div className="miniMandalBox miniMandal">
            {/* <Link to="/mymandal" > */}
                <ul>
                    <li>
                        {/* TO DO: 이미지 변경 가능하도록 */}
                        <img src={window.location.origin+'/images/thumnail.png'} alt="" className="mandalThumNail"/>
                    </li>
                    <li>
                        <div className="textTitleDate">
                            <span>{props.title}</span>
                            <span>{props.startDate} ~ {props.endDate}</span>
                        </div>
                    </li>
                </ul>
            {/* </Link> */}
        </div>
    )
}

export default MiniMandalBox
