import React, { useState } from "react"
import Form from "../components/form"
// import { Link } from "react-router-dom"
// import List from "./list"

const Main = () => {
    const [star, setStar] = useState(null);
   
const getStar = async () => {
    const api = "https://www.swapi.tech/api/people?page=1&limit=82";
        
    const response = await fetch(api);
    // const response = await fetch(star,{headers:{'Origin': "https://www.swapi.tech/api/starships/9"}});
    const json = await response.json();
    setStar(json.results);
    
    console.log(json)
    }
    
    React.useEffect(() => {
        // getStar()
    }, [])

    const loaded = () => {
    return (
            <div className="list">
            {star.map((star) => {
                const {name} = star;
                return (
               <h2>{name}</h2> 
                )
            })}
            </div>                           
        );                                                                                                                                
    };              
    return (                      
        <div className= "main">
            <h1>Yoda's Realm</h1>
            <Form handleClickFromMain={getStar} />
            {star ? loaded() : null}
        </div>
    );
};

export default Main
        
