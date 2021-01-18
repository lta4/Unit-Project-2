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
            "https://www.swapi.tech/api/people/1",
            "https://www.swapi.tech/api/people/2",
            "https://www.swapi.tech/api/people/4",
            "https://www.swapi.tech/api/people/5",
        ]

        // const people =
        // document.querySelector("people");
        // const button = 
        // document.querySelector("button")

        // window.onload = () =>
        // generateRandomPeople(randPeopleArray);
        // button.addEventListener("click", () =>
        // generateRandomPeople(randPeopleArray));

        // function
        // generateRandomPeople(array){
        //     let randomNum =
        // Math.floor(Math.random() *
        // array.length);
        //     people.setAttribute("url",
        //     array[randomNum]);
        // }
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