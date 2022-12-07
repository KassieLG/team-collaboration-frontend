import { useFlight } from "../FlightProvider"

export const FlightDetails = () => {
    const flight=useFlight();
    if(flight.price > 0){
    return (

            <div>
              <ul>
                <li><h2>{flight.orig} to {flight.dest}</h2> </li>
                <li>Departing {flight.depart} </li>
                <li>${flight.price}</li>                
          </ul>
            </div>

    )
    }
    else return(
      <></>
    )
}