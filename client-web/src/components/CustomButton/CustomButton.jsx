import React from 'react';
import "./CustomButton.css"

const CustomButton = (props) => {
    return (
        <div className="custom-button">
            <div className="text">
                {props.text}
            </div>
        </div>
    )
}

export default CustomButton;