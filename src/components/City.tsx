import { City } from "./CityWeatherList";



const CityRow=(city:City)=>{
    return(
        <tr>
            <td>{city.ime}</td>
            <td>{city.temperatura ? city.temperatura : "nepoznata"}</td>
            <td>{city.vlaznost}</td>
        </tr>
    )
    };
    export default CityRow;