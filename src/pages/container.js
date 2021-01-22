import React, { useState } from "react"
import { Link, Route } from "react-router-dom"


const Container = (props) => {

const [details, setDetails] = useState(null);
const getDetails = async () => {
// FETCH FOR API//
const apiCont = props.star.url
//API FETCH// 
  const res = await fetch(apiCont);
  const json = await res.json();
  setDetails(json.result);
console.log(json)
//   console.log("this is details", details)
  };

  React.useEffect(() => {
      getDetails()
  }, [])

  const loaded = () => {
    return (
        <div className="containerInfo">
                <div>
                    <h1>Info</h1>
                    <h2>Name: {details.properties.name}</h2>
                    <h3>Height: {details.properties.height}</h3>
                    <h3>Mass: {details.properties.mass}</h3>
                    <h3>Hair Color: {details.properties.hair_color}</h3>
                    <h3>Skin Color: {details.properties.skin_color}</h3>
                    <h3>Birth Year: {details.properties.birth_year}</h3>
                    <h3>Gender: {details.properties.gender}</h3>
                    <h3>Created: {details.properties.created}</h3>
                    <h3>Edited: {details.properties.edited}</h3>
                </div>
        </div>
        );                         
    };
    return details ? loaded() : <h1>Loading</h1>
}
export default Container


  

