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
const hotel =useHotel();
export const addHotel =(row:hotelData)=>{
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