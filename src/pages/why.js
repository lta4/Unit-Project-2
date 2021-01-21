import React, { useState } from "react"

const Why = (props) => {
const [gif, setGif] = useState(null);
const getGif = async () => {

const apiGif = "https://api.giphy.com/v1/stickers/search?api_key=V08sx8udfp5F9RwTVG49gwlpWzKnOytY&q=baby yoda&limit=25&offset=0&rating=g&lang=en";

  const res = await fetch(apiGif);
  const json = await res.json();
  setGif(json.data);
  console.log(json)
  };

  React.useEffect(() => {
      getGif()
  }, [])

  return (
    <div className="why">
      <img src={gif} alt=""/>
    </div>
  );
}





//     return (
//         <div className="why">
//             <h2 className="thanks">I'd like to thank <a href="https://www.swapi.tech/" target="_blank" rel="noreferrer">Swapi.tech</a> for the API! There is a lot of hard work put into it and I know a lot of Star Wars fans, including myself, really appreciate it!</h2>
//             <h2 className="copyRight">All copyrights belong to <a href="https://www.starwars.com/" target="_blank" rel="noreferrer">Star Wars</a>, and all associated names are copyrights to <a href="https://www.lucasfilm.com/" target="_blank" rel="noreferrer">Lucasfilms</a> ltd.</h2>
//         </div>
//     );
// };

export default Why