import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import BodyText from "../Typography/BodyText"
import "./MiniMandalBox.css"

const MiniMandalBox = (props) => {
    // console.log('mini mandal props:' ,props);
    return (
        <div className={`${props.size}MandalBox ${props.size}Mandal`}>
            <ul>
                <li>
                    {/* TO DO: 이미지 변경 가능하도록 */}
                    {/* feed에서 상단에 프로필과 하트가 있는 바를 나타내는 영역 <-- */}
                    {props.getHeart && <div className="userInfoArea">
                        <div className="wrapUserPic">
                            <img src={props.user.imagePath} alt="" className="userPic"/>
                            <div className="typography">
                                <BodyText fontsize={14} text={props.user.name} />
                                <BodyText fontsize={12} text={props.user.email} />
                            </div>
                        </div>
                        <div className="userHeartArea">
                            <img src={window.location.origin + "/images/heart.png"} alt="" className="heartIcon" />
                            {/* TO DO: db -> heart count */}
                            <BodyText fontsize={12} text={"81"} />
                        </div>
                    </div>}
                    {/* --> */}

                    {(props.thumbnail == undefined) ? 
                        <img src={window.location.origin + '/images/thumbnail.png'} alt="thumbnail" className="mandalthumbnail" />
                        : <img src={window.location.origin + `/${props.thumbnail}`} alt="thumbnail" className="mandalthumbnail" />
                    }
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
        </div>
    )
}
// 만다라트 주인을 넣어줘야할듯
const mapStateToProps = (state) => {
    return { user: state.user }
}

export default connect(mapStateToProps)(MiniMandalBox)
