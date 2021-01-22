import React, { useState } from "react"
import Form from "../components/form"
import { Link, Route } from "react-router-dom"
import Container from "./container"

const Main = (props) => {
    const [star, setStar] = useState(null);
        
// FETCH FOR API //   
const getStar = async () => {
    const api = "https://www.swapi.tech/api/people?page=1&limit=10";
    // FETCH WAITS FOR API, BECOMES JSON //    
    const response = await fetch(api);
    const json = await response.json();
    setStar(json.results);
    }
    
    React.useEffect(() => {
    }, [])

    const loaded = () => {
    return (
            <div className="list">
            {star.map((star, id) => {
                const {name} = star;
                return (
                    <div key={id}>
                        <Link className="apiLink" to={`/main/${name}`}>
                            <h2>{name}</h2>
                        </Link>
                        <Route path={`/main/${name}`}>
                        <Container className="containerRoute" star={star}/>
                        </Route>
                    </div> 
                )
            })}
            </div>                           
        );                                                                                                                                
    };              
    return (                      
        <div className= "main">
            <h1 className="yodaList">Use the Force</h1>
            <Form handleClickFromMain={getStar} />
            {star ? loaded() : null}
        </div>
    );
};

export default Main
        
