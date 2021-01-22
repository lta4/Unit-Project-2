import React, { useState } from "react"

const Container = (props) => {

const [details, setDetails] = useState(null);
const getDetails = async () => {
// FETCH FOR API//
const apiCont = props.star.url
//API FETCH// 
  const res = await fetch(apiCont);
  const json = await res.json();
  setDetails(json.result);
  };

  React.useEffect(() => {
      getDetails()
  }, [])

  const loaded = () => {
    return (
        <div className="containerInfo">
                <div>
                    <h1>Info</h1>
                    <h2 className="detailList">Name: {details.properties.name}</h2>
                    <h3 className="detailList">Height: {details.properties.height}</h3>
                    <h3 className="detailList">Mass: {details.properties.mass}</h3>
                    <h3 className="detailList">Hair Color: {details.properties.hair_color}</h3>
                    <h3 className="detailList">Skin Color: {details.properties.skin_color}</h3>
                    <h3 className="detailList">Birth Year: {details.properties.birth_year}</h3>
                    <h3 className="detailList">Gender: {details.properties.gender}</h3>
                    <h3 className="detailList">Created: {details.properties.created}</h3>
                    <h3 className="detailList">Edited: {details.properties.edited}</h3>
                </div>
        </div>
        );                         
    };
    return details ? loaded() : <h1>Loading...</h1>
}
export default Container


  

