import React from 'react'
import FeedTitle from '../../components/FeedTitle/FeedTitle';
import HeaderText from '../../components/Typography/HeaderText';
import BodyText from '../../components/Typography/BodyText';
import MiniMandalBox from '../../components/MiniMandalBox/MiniMandalBox';
import './FeedBeforeLogin.css'

const FeedBeforeLogin = (props) => {
    // TO DO: remove margin
    // const rmMargin = {
    //     margin: 0
    // }
    const curMandalMarginstyle = {
        justifyContent :"space-between",
    }    
    const keywordArr = [
        '디자인', '개발', '환경사랑', '고시', '취미생활', '문화. 예술', '건강', '사진', 
        '영화', ' 음악', '동물', '음식', '뮤지컬', '루틴', '알고리즘', '언어'
    ]
    
    return (
        <div>
            <FeedTitle />
            <section>
                <article className="keyword-section">
                    <HeaderText text="만다라트 키워드"/>
                    <div class="keyword-wrapper">
                        {keywordArr.map((ele) => {
                            return <BodyText fontsize="20" text={ele} />
                        })}
                        {/* <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>6</div>
                        <div>7</div>
                        <div>8</div>
                        <div>9</div>
                        <div>10</div>
                        <div>11</div>
                        <div>12</div>
                        <div>13</div>
                        <div>14</div>
                        <div>15</div>
                        <div>16</div> */}
                    </div>
                </article>
                <article className="popular-section">
                    <HeaderText text="이달의 인기 만다라트"/>
                    <div className="currentMandals" style={curMandalMarginstyle}>
                        {currentMandalArr.map((mandal) => {
                            return <MiniMandalBox key={mandal.id} size="mini" title={mandal.title} startDate={mandal.startDate} endDate={mandal.endDate} getHeart={true} />
                        })}
                    </div>

                </article>
            </section>
        </div>
    )
}
const currentMandalArr = [
    {
        id: 1,
        title: "행복하고 당당한 2021년의 나!!!",
        startDate: "2021.08.19",
        endDate: "2022.10.19",
    },
    {
        id: 2,
        title: "냥하쓰 멋지게 살자",
        startDate: "2021.03.03",
        endDate: "2022.10.19",
    },
    {
        id: 3,
        title: "김서영의 만다라트",
        startDate: "2021.04.03",
        endDate: "",
    },
    {
        id: 3,
        title: "김서영의 만다라트",
        startDate: "2021.04.03",
        endDate: "",
    },
]

export default FeedBeforeLogin;
