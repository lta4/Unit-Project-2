import React, { useState } from "react"
// import { Link } from "react-router-dom"


const Why = (props) => {
const [gif, setGif] = useState(null);
const getGif = async () => {
//API//
const apiGif = "https://api.giphy.com/v1/stickers/search?api_key=V08sx8udfp5F9RwTVG49gwlpWzKnOytY&q=baby yoda&limit=1&offset=0&rating=g&lang=en";
//API FETCH// 
  const res = await fetch(apiGif);
  const json = await res.json();
  setGif(json.results);
  console.log(json)
  };

  React.useEffect(() => {
      // getGif()
      console.log(getGif)
  }, [])

  const loaded = () => {
  return (
        <div className="list">
        {gif.map((gif) => {
            const {slug} = gif;
            return (
                // <Link className="apiLink" to={`/why/${name.url.img.slug}`}>
                    <img src={slug} alt=""></img>
                // </Link> 
            )
        })}
        </div>                           
    );                                                                                                                                
};       

  return (
    <div className="why">
        <div>
            {/* <img src={gif} alt=""/> */}
            <h2 className="thanks">I'd like to thank <a href="https://www.swapi.tech/" target="_blank" rel="noreferrer">Swapi.tech</a> for the API! There is a lot of hard work put into it and I know a lot of Star Wars fans, including myself, really appreciate it!</h2>
            <h2 className="copyRight">All copyrights belong to <a href="https://www.starwars.com/" target="_blank" rel="noreferrer">Star Wars</a>, and all associated names are copyrights to <a href="https://www.lucasfilm.com/" target="_blank" rel="noreferrer">Lucasfilms</a> ltd.</h2>
            {gif ? loaded() : null}
        </div>    
    </div>
  );
}

export default Why