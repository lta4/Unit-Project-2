import React from "react"
import Form from "../components/form"

const Main = (props) => {
    
    // const url = props.match.params.url;
    const apiUrl = "https://www.swapi.tech/api/people?url=${url}page=1&limit=82"
    
    const [data, setData] = React.useState("null");
    const getData = async (searchTerm) => {
        const response = await fetch(apiUrl)
        const data = await response.json()
        // setData(data) /* CREATES LOOPS */
        console.log(data)
    }
    getData()
    
    // React.useEffect(() => {
    //     const randPeople = [
    //         "https://www.swapi.tech/api/people/1",
    //         "https://www.swapi.tech/api/people/2",
    //         "https://www.swapi.tech/api/people/4",
    //         "https://www.swapi.tech/api/people/5",
    //     ]

    //     const randomIndex = Math.floor(Math.random() * randPeople.length)
    //     getData(randPeople[randomIndex])
    // }, []);

    return (
        <div className= "main">
            <Form infoSearch={getData} />
        </div>
    )
}
   

export default Main