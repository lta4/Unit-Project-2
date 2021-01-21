import React from "react"
// import Form from "react"

const Container = (props) => {

    if(props.name) {
        const {name, height, eye_color, mass, birth_year, skin_color} = props.name;
    return(
        <>
            <div className="container">
            {/* <Form /> */}
                <h2>{name}</h2>
            </div>
            <div>
                <h2>Height: {height}</h2>
                <h3>Eye Color: {eye_color}</h3>
                <ul>Mass: {mass}</ul>
                <li>Birth Year: {birth_year}</li>
                <span>Skin Color: {skin_color}</span>
            </div>
        </>
        );
    }    
else {
    return (
        <h2>{props.name}</h2>
    )
};  
};

console.log(Container)

export default Container