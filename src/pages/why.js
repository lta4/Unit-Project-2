import React, { useState } from "react"
// import { Link } from "react-router-dom"


const Why = (props) => {
  const [gif, setGif] = useState(null);
const getGif = async () => {
// FETCH FOR API//
const apiGif = "https://api.giphy.com/v1/stickers/search?api_key=V08sx8udfp5F9RwTVG49gwlpWzKnOytY&q=baby yoda&limit=1&offset=0&rating=g&lang=en";
//API FETCH// 
  const res = await fetch(apiGif);
  const json = await res.json();
  setGif(json.data);
  };

  React.useEffect(() => {
      getGif()
  }, [])

  const loaded = () => {
  return (
        <div className="whyGif">
        {gif.map((gif, id) => {
            const {name} = gif;
            return (
              <div key={id}>
                <h2>{name}</h2>
              </div>
            )
        })}
        </div>                           
    );                                                                                                                                
};       

  return (
      <div className="why">
          <div>
              <h2 className="forWhat">This app has an abundant of characters with all of they're information. It includes both the good and the bad (light and the dark). A  navigation bar will have forwarding links to designating areas within the site.</h2>
              <br></br>
              <h2 className="thanks">I'd like to thank <a href="https://www.swapi.tech/" target="_blank" rel="noreferrer">Swapi.tech</a> for the API! There is a lot of hard work put into it and I know a lot of Star Wars fans, including myself, really appreciate it!</h2>
              <br></br>
              <h2 className="copyRight">All copyrights belong to <a href="https://www.starwars.com/" target="_blank" rel="noreferrer">Star Wars</a>, and all associated names are copyrights to <a href="https://www.lucasfilm.com/" target="_blank" rel="noreferrer">Lucasfilms</a> ltd.</h2>
              {gif ? loaded() : null}
          </div>    
      </div>
  );
};

export default Why