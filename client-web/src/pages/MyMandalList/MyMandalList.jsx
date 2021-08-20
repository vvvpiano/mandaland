import React from 'react';
import MiniMandalBox from '../../components/MiniMandalBox/MiniMandalBox'
import '../../components/reset.css'
import '../../components/common.css'
import './MyMandalList.css'

const MyMandalList = () => {
    
    return (
        <div className="wrapMandallist">
            <section className="mandalSmallList">
                <div className="wrapModal">
                <nav className="mandalViewChanger">
                    <select name="" id="" className="plannerSelectBox">
                            <option value="">MANDALPLAN</option>
                            <option value="">MANDAL2</option>
                    </select>
                    <span className="myText">MY</span>
                </nav>
                <article className="fourMandals">
                    <h3 className="mandalsTitle">진행 중인 만다라트</h3>

                    {currentMandalArr.map((mandal) => {
                        return <MiniMandalBox key={mandal.id} title={mandal.title} startDate={mandal.startDate} endDate={mandal.endDate}/>   
                    })} 
                </article>
                <article className="fourMandals">
                    <h3 className="mandalsTitle">완료된 만다라트</h3>

                    {finishedMandalArr.map((mandal) => {
                        return <MiniMandalBox key={mandal.id} title={mandal.title} startDate={mandal.startDate} endDate={mandal.endDate}/>   
                    })} 
                </article>
                </div>
            </section>
        </div>
    )
}
// dummy for mandals table
const currentMandalArr = [
    {   
        "id":1,
        "title":'행복하고 당당한 2021년의 나!!!',
        "startDate":"2021.08.19",
        "endDate":"2022.10.19"
    },
    {
        "id":2,
        "title":'냥하쓰 멋지게 살자',
        "startDate":"2021.03.03",
        "endDate":"2022.10.19"
    },
    {
        "id":3,
        "title":'김서영의 만다라트',
        "startDate":"2021.04.03",
        "endDate":""
    },
    {   
        "id":4,
        "title":'2021년의 나 오주연은 어떤 사람이 될까요?!!!',
        "startDate":"2021.08.19",
        "endDate":"2022.10.19"
    },
    {
        "id":5,
        "title":'민영쓰 추천알고리즘 빠이팅',
        "startDate":"2021.03.03",
        "endDate":"2022.10.19"
    },
    {
        "id":6,
        "title":'긍정적인 삶',
        "startDate":"2021.04.03",
        "endDate":""
    },

]

const finishedMandalArr = [
    {   
        "id":1,
        "title":'행복하고 당당한 2009년의 민영!!!',
        "startDate":"2009.08.19",
        "endDate":"2009.10.19"
    },
    {
        "id":2,
        "title":'멋지게 살았던나',
        "startDate":"2001.03.03",
        "endDate":"2002.10.19"
    },
    {
        "id":3,
        "title":'김서영의 만달만달',
        "startDate":"2020.04.03",
        "endDate":""
    },
    {   
        "id":4,
        "title":'2007년의 나 오주연은 어떤 사람이 될까요?!!!',
        "startDate":"2007.08.19",
        "endDate":"2007.10.19"
    },
]


export default MyMandalList
