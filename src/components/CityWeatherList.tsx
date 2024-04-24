import React, { FC,useState } from "react";
import CityRow from "./City";

export interface City {
  ime : string;
  temperatura ? : string;
  vlaznost : string;
}

const cityList: City[] = [
  { ime: "Novi Sad", temperatura: "18 C", vlaznost: "80 %" },
  { ime: "Beograd", temperatura: "15 C", vlaznost: "87%" },
  { ime: "Uzice", vlaznost: "67%" },
  { ime: "Kragujevac", temperatura: "15 C", vlaznost: "77%" },
  { ime: "Vranje", temperatura: "15 C", vlaznost: "82%" },
];


const CityWeatherList: FC = () => {

    const [listaGradova,setListaGradova] = useState<City[]>(cityList)
    
  return (
    <div>
      <table className="tabela">
        <tr>
          <td> grad </td>
          <td> temoeratura </td>
          <td> vlaznost </td>
        </tr>
        {listaGradova.map((grad, index) => (
          <CityRow
            key={index}
            ime={grad.ime}
            temperatura={grad.temperatura}
            vlaznost={grad.vlaznost}
          />
        ))}
      </table>
    </div>
  );
};
export default CityWeatherList;
