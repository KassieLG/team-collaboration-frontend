import { useHotel } from "../HotelProvider"

export const HotelDetails = () => {
    const hotel=useHotel();
    if(hotel.price > 0){
    return (

            <div>
              <ul>
                <li><h2>{hotel.name}</h2> </li>
                <li>{hotel.price} </li>                
          </ul>
            </div>

    )
    }
    else return(
      <></>
    )
}