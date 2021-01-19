import React, { useState } from "react"
import Form from "../components/form"
import List from "./list"

const Main = () => {
    const [star, setStar] = useState("null");
   
const handleClick = async () => {
    const star = "https://www.swapi.tech/api/people?page=1&limit=82";
        
    const response = await fetch(star);
    const json = await response.json();
    setStar(json.data);
    
    console.log(response)
    }
    
    // React.useEffect(() => {
    //     const randPeople = [
    //         "https://www.swapi.tech/api/people/1",
    //         "https://www.swapi.tech/api/people/2",
    //         "https://www.swapi.tech/api/people/4",
    //         "https://www.swapi.tech/api/people/5",
    //     ]

    //     const randomIndex = Math.floor(Math.random() * randPeople.length)
    //     getStar(randPeople[randomIndex])
    // }, []);

    return (
        <div className= "main">
            <h1>The Main Yoda</h1>
            <Form handleClickFromMain={handleClick} />
            <List star={star} />
        </div>
    );
};
   
export default Main

