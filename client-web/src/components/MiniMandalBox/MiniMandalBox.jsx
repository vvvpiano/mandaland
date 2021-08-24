import React from "react"
import { connect } from "react-redux"
import BodyText from "../Typography/BodyText"
import "./MiniMandalBox.css"

const MiniMandalBox = (props) => {
    return (
        <div className={`${props.size}MandalBox ${props.size}Mandal`}>
            <ul>
                <li>
                    {/* TO DO: 이미지 변경 가능하도록 */}
                    {/* feed에서 상단에 프로필과 하트가 있는 바를 나타내는 영역 <-- */}
                    {props.getHeart && <div className="userInfoArea">
                        {console.log(props.userInfo)}
                        <div className="wrapUserPic">
                            <img src={props.userInfo.imagePath} alt="" className="userPic"/>
                            <div className="typography">
                                <BodyText fontsize={14} text={props.userInfo.userName} />
                                {/* <BodyText fontsize={12} text={props.user.email} /> */}
                            </div>
                        </div>
                        <div className="userHeartArea">
                            <img src={window.location.origin + "/images/heart.png"} alt="" className="heartIcon" />
                            {/* TO DO: db -> heart count */}
                            <BodyText fontsize={12} text={props.userInfo.heartNum} />
                        </div>
                    </div>}
                    {/* --> */}

                    {(props.userInfo.thumbnailPath == undefined) ? 
                        <img src={window.location.origin + '/images/thumbnail.png'} alt="thumbnail" className="mandalthumbnail" />
                        : <img src={window.location.origin + `/${props.userInfo.thumbnailPath}`} alt="thumbnail" className="mandalthumbnail" />
                    }
                </li>
                <li>
                    <div className="textTitleDate">
                        <span>{props.userInfo.title}</span>
                        {props.userInfo.startDate != null && (
                            <span>
                                {props.userInfo.startDate} ~ {props.userInfo.endDate}
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
