import React, { useState } from "react"
import { Link, Route } from "react-router-dom"


const Container = (props) => {

const [details, setDetails] = useState();
const getDetails = async () => {
// FETCH FOR API//
const apiCont = "https://www.swapi.tech/api/people?page=1&limit=10";
//API FETCH// 
  const res = await fetch(apiCont);
  const json = await res.json();
  setDetails(json.results);
//   console.log("this is details", details)
  };

  React.useEffect(() => {
      getDetails()
  }, [])

  const loaded = () => {
    return (
        <div className="containerInfo">
            {details.map((star) => {
            const {props} = star;
            return (
                <div>
                <Link to={`/main/${star}`}>
                    <h1>Info</h1>
                    <h2>Name: {props.name.url}</h2>
                    <h3>Height: {props.name.url}</h3>
                    <h3>Mass: {props.name.url}</h3>
                    <h3>Hair Color: {props.name.url}</h3>
                    <h3>Skin Color: {props.name.url}</h3>
                    <h3>Birth Year: {props.name.url}</h3>
                    <h3>Gender: {props.name.url}</h3>
                    <h3>Created: {props.name.url}</h3>
                    <h3>Edited: {props.name.url}</h3>
                    {details ? loaded() : null}
                {/* <Route path={`/main/${star}`}>
                <Container path={""}/>
                </Route> */}
                </Link>
                </div>
                    );
                })
            };
        </div>
        );                         
    };
}
export default Container


  

