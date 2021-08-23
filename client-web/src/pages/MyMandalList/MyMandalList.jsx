import React, { setState, useState, useEffect } from "react"
import { connect } from "react-redux"
import { getMandal } from "../../actions"
import MiniMandalBox from "../../components/MiniMandalBox/MiniMandalBox"
import MandalViewChanger from "../../components/MandalViewChanger/MandalViewChanger"
import MonthlyProgress from "../../components/MonthlyProgress/MonthlyProgress"
import "./MyMandalList.css"

const MyMandalList = (props) => {
    const id = window.localStorage.getItem("id");

    useEffect(() => { 
        props.getMandal(id)
    }, [])
    const renderCurrentProfile = () => {
        return (
            <article className="gridItem">
                <div className="myMiniProfile">
                    <img src={props.user.imagePath === null ? window.location.origin + "/icons/user.svg" : props.user.imagePath.replace("=s96-c", "")} alt="" className="profileImg" />
                    <h2 className="userName">{props.user.name}</h2>
                    <h3 class="userEmail">{props.user.email}</h3>
                </div>
                    <div className="myMandalResolution">{/* TO DO: modify user DB -> {props.user.resolution} */}“ 하루하루를 성실하게 보내고 싶은 개발자입니다. ”</div>
            </article>
        )
    }

    // const renderMonthlyActivity = () => {
    //     return (
    //         <article className="gridItem">
    //             <h3 className="monthlyTitle english">Monthly Activity</h3>
    //             <div className="progressAlign">
    //                 {monthlyActivityData.map((each)=>{
    //                     return <MonthlyProgress month={each.month} progress={each.progress}/>
    //                 })}
    //             </div>
    //             <div className="goMandalandBtn">
    //                 <img src={window.location.origin + "/icons/mandaland.svg"} alt="" />
    //                 <span className="goMandalText english">GO</span>
    //             </div>
    //         </article>
    //     )
    // }
    const renderCurrentMandal = () => {
        if(props.mandalarts == null) {
            return <div />
        }
        return (
            <article className="gridItem">
                <h3 className="currentMandalTitle">진행 중인 만다라트({`${props.mandalarts.length}`})</h3>
                <div className="currentMandals">
                    {props.mandalarts.map((mandal) => {
                        return <MiniMandalBox key={mandal.id} size="mini" title={mandal.title} thumbnail={mandal.thumbnailPath} startDate={mandal.startDate} endDate={mandal.endDate} />
                    })}
                </div>
            </article>
        )
    }

    return (
        <div className="wrapMandallist">
            <section className="mandalSmallList">
                <div className="wrapModal">
                    <MandalViewChanger />
                    <section className="gridContainer">
                        {/* 1. profile */}
                        {renderCurrentProfile()}

                        {/* 2. Monthly Activity */}
                        <article className="gridItem makeMargin">
                            <h3 className="monthlyTitle english">Monthly Activity</h3>
                            <div className="progressAlign">
                                {monthlyActivityData.map((each)=>{
                                    return <MonthlyProgress month={each.month} progress={each.progress}/>
                                })}
                            </div>
                            <button className="goMandalandBtn">
                                <img src={window.location.origin + "/icons/mandaland.svg"} alt="" />
                                <div className="wrapGoText">
                                    <span className="goMandalText english">GO</span>
                                    <img src={window.location.origin + "/icons/arrow_pink.svg"} alt="" />
                                </div>
                            </button>
                        </article>

                        {/* 3. 진행중인 만다라트 */}
                        {renderCurrentMandal()}

                        {/* 4. 완료된 만다라트 */}
                        <article className="gridItem">
                            <h3 className="finishedMandalTitle">완료된 만다라트({`${finishedMandalArr.length}`})</h3>
                            <div className="finishedMandals">
                                {finishedMandalArr.map((mandal) => {
                                    return <MiniMandalBox key={mandal.id} size="small" title={mandal.title} />
                                })}
                            </div>
                        </article>
                    </section>
                </div>
            </section>
        </div>
    )
}
// dummy for mandals table
const monthlyActivityData = [
    {
        month: "Jan",
        progress: 90,
    },
    {
        month: "Feb",
        progress: 80,
    },
    {
        month: "Mar",
        progress: 100,
    },
    {
        month: "Apr",
        progress: 70,
    },
    {
        month: "May",
        progress: 10,
    },
    {
        month: "Jun",
        progress: 50,
    },
    {
        month: "Jul",
        progress: 30,
    },
    {
        month: "Aug",
        progress: 20,
    },
    {
        month: "Sep",
        progress: 90,
    },
    {
        month: "Oct",
        progress: 50,
    },
    {
        month: "Nov",
        progress: 60,
    },
    {
        month: "Dec",
        progress: 90,
    },
]
const currentMandalArr = [
    {
        id: 1,
        title: "행복하고 당당한 2021년의 나!!!",
        startDate: "2021.08.19",
        endDate: "2022.10.19",
        userId: "108449024264620819194",
    },
    {
        id: 2,
        title: "냥하쓰 멋지게 살자",
        startDate: "2021.03.03",
        endDate: "2022.10.19",
        userId: "108449024264620819194",
    },
    {
        id: 3,
        title: "김서영의 만다라트",
        startDate: "2021.04.03",
        endDate: "",
        userId: "111098462535511801220",
    },
]

const finishedMandalArr = [
    {
        id: 1,
        title: "행복하고 당당한 2009년의 민영!!!",
        startDate: "2009.08.19",
        endDate: "2009.10.19",
    },
    {
        id: 2,
        title: "멋지게 살았던나",
        startDate: "2001.03.03",
        endDate: "2002.10.19",
    },
    {
        id: 3,
        title: "김서영의 만달만달",
        startDate: "2020.04.03",
        endDate: "",
    },
    {
        id: 4,
        title: "2007년의 나 오주연은 어떤 사람이 될까요?!!!",
        startDate: "2007.08.19",
        endDate: "2007.10.19",
    },
]
const mapStateToProps = (state) => {
    return { 
        user: state.user,
        mandalarts: state.mandalarts.mandalarts
    }
}

export default connect(mapStateToProps, { getMandal })(MyMandalList)
