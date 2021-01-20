import React, { useState } from "react"
import Form from "../components/form"
import List from "./list"

const Main = () => {
    const [star, setStar] = useState("null");
   
const getStar = async () => {
    const star = "https://www.swapi.tech/api/starships/9";
        
    const response = await fetch(star);
    // const response = await fetch(star,{headers:{'Origin': "https://www.swapi.tech/api/starships/9"}});
    const json = await response.json();
    setStar(json.data);
    
    console.log(json)
    }
    
    React.useEffect(() => {
        getStar()
    }, [])

    // console.log("this is star", setStar)

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
            <h1>Yoda's Realm</h1>
            <Form handleClickFromMain={getStar} />
            <List star={star} />
        </div>
    );
};
   
export default Main

