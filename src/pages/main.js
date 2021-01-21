import React, { useState } from "react"
import Form from "../components/form"
import { Link } from "react-router-dom"
// import List from "./list"

const Main = () => {
    const [star, setStar] = useState(null);
   
const getStar = async () => {
    const api = "https://www.swapi.tech/api/people?page=1&limit=82";
        
    const response = await fetch(api);
    const json = await response.json();
    setStar(json.results);
    
    console.log(json)
    }
    
    React.useEffect(() => {
        getStar()
    }, [])

    const loaded = () => {
    return (
            <div className="list">
            {star.map((star) => {
                const {name, url} = star;
                return (
                    <Link to={`/main/${url}`}>
                        <h2>{name}</h2>
                    </Link> 
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
        
