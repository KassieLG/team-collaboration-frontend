import { useFlight } from "../FlightProvider"
import { useHotel } from "../HotelProvider"

type hotelData={
    _id:string,
    hotel_id:number,
    descripton:string,
    hotel_address:string,
    hotel_state:string,
    price:number,
    reviews:string,
    amenities:string
}
type flightData={
    _id:string,
    flight_id:number,
    airline_name:string,
    from_location:string,
    to_location: string,
    departure_date:string,
    arrival_date:string,
    duration:number,
    total_seats:number,
    available_seats:number,
    price:number
}


export const addHotel =(row:hotelData)=>{
    const hotel =useHotel();
    hotel.setHotel(row._id, row.hotel_id, row.price, row.hotel_address)
    
    return(
        <div className="modal">
            <div className="modal-dialog">
                <h4>Added to Cart</h4> 
            </div>
        <div>    
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
        <p>Thank You for choosing National Quick.</p>
      </div>
      </div>
        
    )
}
export const addFlight=(row:flightData)=>{
    const flight = useFlight();
    flight.setFlight(row._id, row.flight_id, row.price, row.from_location, row.to_location, row.departure_date)
}