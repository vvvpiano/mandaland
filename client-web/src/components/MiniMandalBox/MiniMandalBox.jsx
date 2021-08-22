import React from "react"
import { Link } from "react-router-dom"
import "./MiniMandalBox.css"

const MiniMandalBox = (props) => {
    return (
        <div className={`${props.size}MandalBox ${props.size}Mandal`}>
            {/* <Link to="/mymandal" > */}
            <ul>
                <li>
                    {/* TO DO: 이미지 변경 가능하도록 */}
                    <img src={window.location.origin + "/images/thumnail.png"} alt="" className="mandalThumNail" />
                </li>
                <li>
                    <div className="textTitleDate">
                        <span>{props.title}</span>
                        {props.startDate != null && (
                            <span>
                                {props.startDate} ~ {props.endDate}
                            </span>
                        )}
                    </div>
                </li>
            </ul>
            {/* </Link> */}
        </div>
    )
}

export default MiniMandalBox
