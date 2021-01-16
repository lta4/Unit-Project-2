// import { getAllByPlaceholderText } from "@testing-library/react"
import React from "react"

const Main = (props) => {
        
    const apiUrl = "https://www.swapi.tech/api/people?page=1&limit=82"
    const getData = async () => {
        const response = await fetch(apiUrl)
        const data = await response.json()
        console.log(data)
    }
    getData()

    return (
        <div className= "main">
            <button
            className="mainBtn1">
                Click
            </button>
            <button
            className="mainBtn2">
                Click
            </button>
        </div>
    )
}

export default Main