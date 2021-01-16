import React from "react"

const Form = (props) => {
    
    const [formData, setFormData] = React.useState({
        searchTerm: "",
    });

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    const handleClick = (event) => {
        event.preventDefault();
        props.infoSearch(formData.searchTerm)
    }

    return (
        <>
            <div>
                <form className="form1"
                        onClick={handleClick}>
                        <button
                        className="mainBtn1"
                        onChange={handleChange}
                        value={FormData.searchTerm}
                        placeholder="">
                            Click
                        </button>
                        <button
                        className="mainBtn2"
                        onChange={handleChange}
                        value={FormData.searchTerm}>
                            Click
                        </button>
                    {/* <input type="text" placeholder="Search" />
                    <button className="mainBtn3"></button> */}
                </form>
            </div>
        </>
    )
}

export default Form