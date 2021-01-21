
//     return (
//         <div className="list">
//         {list.map((star) => {
//             const {name, url} = star;
//             return (
//                 <Link to={`/list/${url}`}>
//                     <h2>{name}</h2>
//                 </Link>
//             )
//         })}
//     </div>
//     )
// }

// export default List

// import React from "react"
// import { Link } from "react-router-dom"

// const List = (props) => {

    // const selected = [props.result.properties.name]

    // const [list, setList] = useState(null)

    // React.useEffect(() => {
    //     fetch([selected])
    //         .then((response) => response.json())
    //         .then((star) => {
    //             setList(star)
    //             // console.log(star);
    //         });
    // }, [selected]);

    // return (
    //         <div className="list">
    //             <h2>{props.star}</h2>    
    //         </div>
    //     );
    // };
    // console.log()

// return (
//         <div className="list">
//             {list.map((star) => {
//                 const {name, url} = star;
//                 return (
//                 <Link to={`/list/${url}`}>
//                     <h2>{name}</h2>
//                 </Link>
//                 )
//             })}
//         </div>
//         )
//     }
// export default List