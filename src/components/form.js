import React from "react"

const Form = (props) => {
    
    const handleClick = () => {
        props.handleClickFromMain()
    }

    // const randomUrl = new Array ("https://www.swapi.tech/api/people?page=1&limit=82")
    // for (let i=0; i < 5; i++) {
    //     const number = Math.floor(Math.random() * randomUrl.length);
    //     document.getElementById("result").innerHTML += '<img src=" ' + randomUrl[number] + ' " style="width:150px" />'
    // }

    return (
        <>
        <button
            type="button"
            className="mainBtn1"
            onClick={handleClick}>
                Click
        </button>
        {/* <button
            type="button"
            className="mainBtn2"
            onClick={handleClick}>
                Click
        </button> */}
        </>
    );
};

export default Form