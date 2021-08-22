import React from "react"
import { Link } from "react-router-dom"

import "./SearchBox.css"

const enterkey = (e) => {
    if (window.event.keyCode == 13) {
        // 엔터키가 눌렸을 때 실행할 내용
        console.log(e.target.value) //input태그에 들어온 내용
    }
}

const SearchBox = () => {
    return (
        <div className="inputBoxAlign">
            <div className="inputBoxWrapper">
                <select name="" id="" className="selectBoxStyle">
                    <option value="">주제</option>
                    <option value="">사용자</option>
                </select>
                <input type="text" placeholder="검색어를 입력하세요" className="inputBox" onKeyUp={(e) => enterkey(e)} />
                <Link to="#">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-search searchIconStyle"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default SearchBox
