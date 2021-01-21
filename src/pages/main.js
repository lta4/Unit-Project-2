import React, { useState } from "react"
import Form from "../components/form"
import { Link } from "react-router-dom"
// import List from "./list"

const Main = () => {
    const [star, setStar] = useState(null);
// FETCH FOR API //   
const getStar = async () => {
    const api = "https://www.swapi.tech/api/people?page=1&limit=82";
    // FETCH WAITS FOR API, BECOMES JSON //    
    const response = await fetch(api);
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
            {star.map((star, id) => {
                const {name, url} = star;
                return (
                    <Link className="apiLink" to={`/main/${url}`}>
                        <h2>key={id}{name}</h2>
                    </Link> 
                )
            })}
            </div>                           
        );                                                                                                                                
    };              
    return (                      
        <div className= "main">
            <h1 className="yodaList">Yoda's Knowledge</h1>
            <Form handleClickFromMain={getStar} />
            {star ? loaded() : null}
        </div>
    );
};

export default Main
        
