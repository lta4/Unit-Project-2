import React from "react"

const Form = (props) => {
    
    const handleClick = () => {
        props.handleClickFromMain()
    }

    return (
        <>
        <button
            type="button"
            className="mainBtn1"
            onClick={handleClick}>
                Press
        </button>
        </>
    );
};

export default Form