import React from "react"

const Form = (props) => {
    
    const [formData, setFormData] = React.useState({
        searchTerm: "",
    });

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
        console.log("formData", formData)
    };

    const handleClick = (event) => {
        event.preventDefault();
        props.infoSearch(formData.searchTerm)
    }

    // const randomUrl = new Array ("https://www.swapi.tech/api/people?page=1&limit=82")
    // for (let i=0; i < 5; i++) {
    //     const number = Math.floor(Math.random() * randomUrl.length);
    //     document.getElementById("result").innerHTML += '<img src=" ' + randomUrl[number] + ' " style="width:150px" />'
    // }

    return (
            <div>
                <form className="form1"
                        onClick={handleClick}>
                        {/* onClick="getRandomUrl()"> */}
                        <button
                        className="mainBtn1"
                        onChange={handleChange}
                        value={formData.searchTerm}
                        placeholder="">
                            Click
                        </button>
                        <button
                        className="mainBtn2"
                        onChange={handleChange}
                        value={formData.searchTerm}>
                            Click
                        </button>
                    {/* <input type="text" placeholder="Search" />
                    <button className="mainBtn3"></button> */}
                </form>
            </div>
        
    )
}

export default Form