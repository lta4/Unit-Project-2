import React from "react"
import Form from "../components/form"

const Main = (props) => {
    
    // const url = props.match.params.url;
    const url = "https://www.swapi.tech/api/people?url=${url}page=1&limit=82"
    // const [info, setInfo] = React.useState("null");
    const getData = async (searchTerm) => {
        
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    }
    getData()
    

    React.useEffect(() => {
        const randPeople = [
            "https://www.swapi.tech/api/people/1",
            "https://www.swapi.tech/api/people/2",
            "https://www.swapi.tech/api/people/4",
            "https://www.swapi.tech/api/people/5",
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