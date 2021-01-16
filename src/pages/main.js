// import { getAllByPlaceholderText } from "@testing-library/react"
import React, { useEffect } from "react"
import Form from "../components/form"

const Main = (props) => {
        
    const apiUrl = "https://www.swapi.tech/api/people?page=1&limit=82"
    const [info, setInfo] = React.useState("null");
    const getData = async (searchTerm) => {
        
        const response = await fetch(apiUrl)
        const data = await response.json()
        console.log(data)
    }
    getData()

    // React.useEffect(() => {
    //     getData()
    // }, [])

    return (
        <div className= "main">
            <Form infoSearch={getData} />
        </div>
    )
}

export default Main