import React from "react"
import Form from "../components/form"

const Main = (props) => {
    
    // const url = props.match.params.url;
    const apiKey = "https://www.swapi.tech/api/people?page=1&limit=82"
    const [info, setInfo] = React.useState("null");
    const getData = async (searchTerm) => {
        
        const response = await fetch(apiKey)
        const data = await response.json()
        console.log(data)
    }
    getData()
    

    React.useEffect(() => {
        const randPeople = [
            "Luke Skywalker",
            "C-3PO",
            "Darth Vader",
            "R2-D2"
        ]

        const randomIndex = Math.floor(Math.random() * randPeople.length)
        getData(randPeople[randomIndex])
    }, []);

    return (
        <div className= "main">
            <Form infoSearch={getData} />
        </div>
    )
}

export default Main