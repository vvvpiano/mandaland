import React from "react"
import "../CustomButton/CustomButton.css"

const SubmitButton = (props) => {
    const { text } = props
    return (
        <button className="custom-button" type="submit">
            <div className="text">{text}</div>
        </button>
    )
}

export default SubmitButton
