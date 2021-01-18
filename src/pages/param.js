// import React from "react"

// const Param = (props) => {
//     return <div>Hello</div>
// }

// export default Param

// import React from "react"
// import Form from "../components/form"

// const Param = (props) => {
    
//     // const url = props.match.params.url;
//     const apiKey = "https://www.swapi.tech/api/people?page=1&limit=82"
//     const [info, setInfo] = React.useState("null");
//     const getData = async (searchTerm) => {
//         const response = await fetch(apiKey)
//         const data = await response.json()
//         console.log(data)
//         setInfo(data);
//     }

//     getData()
   
//     React.useEffect(() => {
//         getData()
//     }, []);

    // const loaded = () => {
    //     return (
    //         <div>
    //             <h1>
    //                 {data.asset_id_base}/{data.asset_id_quote}
    //             </h1>
    //             <h2>{data.rate}</h2>
    //         </div>
    //     );
    // };

    // const loading = () => {
    //     return <h1>Loading...</h1>;
    // };

    // return data ? loaded() : loading();

//     return (
//         <div className= "param">
//             <Form infoSearch={getData} />
//         </div>
//     )
// };

// export default Param