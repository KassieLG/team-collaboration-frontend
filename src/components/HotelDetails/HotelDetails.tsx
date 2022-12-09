import { useHotel } from "../HotelProvider"

export const HotelDetails = () => {
    const hotel=useHotel();
    if(hotel.price > 0){
    return (

            <div>
              <ul>
                <li><h2> Hotel: {hotel.name}</h2> </li>
                <li>Price: ${hotel.price} </li>                
          </ul>
            </div>

    )
    }
    else return(
      <></>
    )
}