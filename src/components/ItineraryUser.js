import { useGetItinerariesUserQuery } from "../features/citiesAPI"
import '../styles/ItineraryUser.css'
export default function EventItineraries(){
let id = '6321d8cab1014ab3521b1c80'


    const {
        data:elem,

    } = useGetItinerariesUserQuery(id)

console.log(elem)
   
    let cityShow =(city)=>(
        <div className="ItinerariesUser">
            <h3  className="citiItiner"> {city.name}</h3>
            <br></br>
            <hr></hr>
            <h4  className="userItiner">User : {city.user.name}</h4>
            <hr></hr>
            <br></br>
            <p >Price: $ {city.price}</p>
            <p >Likes:   {city.likes}</p>
            <p >Tags:  {city.tags}</p>
            <p >Duration: {city.duration}</p>
    </div>
        
     )

return(
    <div>
        <h1 className="titleIti">Itineraries</h1>
        <div className="container">
       { elem?
        elem.response.map(cityShow)
        :''
       }

        </div>
    </div>

  
)

}