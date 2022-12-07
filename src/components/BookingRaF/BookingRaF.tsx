import axios from "axios";
import { FormEventHandler, useState } from "react"



export const BookingRaF = () => {
  const[location,setLocation]=useState("");
  const[checkin,setCheckin]=useState("");
  const[checkout,setCheckout]=useState("");  
  const[guestnum,setGuestnum]=useState("");
  
  const handleSubmitH = (async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    const searchString=JSON.stringify({
      location: location,
      checkin: checkin,
      checkout:checkout,
      guestNum:guestnum
    })
    const res = await axios.post('https://localhost:3500/searchHotel',{city:location});

  });




  return (
      <section className="book">
      <div>
            <ul className="nav nav-tabs" id="searchTabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="HotelSearchTab" data-bs-toggle="tab" data-bs-target="#hotel-search-pane" type="button" role="tab" aria-controls="hotel-search-pane" aria-selected="true">Search Hotel</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="AirSearchTab" data-bs-toggle="tab" data-bs-target="#air-search-pane" type="button" role="tab" aria-controls="air-search-pane" aria-selected="false">Search Flight</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="BothSearchTab" data-bs-toggle="tab" data-bs-target="#both-search-pane" type="button" role="tab" aria-controls="both-search-pane" aria-selected="false">Search Hotel & Flight</button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="hotel-search-pane" role="tabpanel" aria-labelledby="HotelSearchTab">
              Hotel Search Pane
              <form className="mb-3 form" onSubmit={handleSubmitH} method="post">
              <label htmlFor="location" className="form-label" >Location</label>
              <input type="text" id="location" className="formControl" onChange={(e)=>setLocation(e.target.value)}></input>
              <label htmlFor="checkin" className="form-label" >Check In</label>
              <input type="date" id="checkin" className="formControl" onChange={(e)=>setCheckin(e.target.value)}></input>
              <label htmlFor="checkout" className="form-label" >Check Out</label>
              <input type="date" id="checkout" className="formControl light"onChange={(e)=>setCheckout(e.target.value)}></input>
              <label htmlFor="guestNum" className="form-label" >Number of guests</label>
              <input type="number" max="4" min="1" id="guestNum" className="formControl light" onChange={(e)=>setGuestnum(e.target.value)}></input>
              <button type="submit" className="btn btn-primary mb-3">Submit</button>
              </form>
            </div>
            <div className="tab-pane fade show" id="air-search-pane" role="tabpanel" aria-labelledby="AirSearchTab">
              Airline Search Pane
              <form className="mb-3">
              <label htmlFor="departCity" className="form-label" >Departing City</label>
              <input type="text" id="departCity" className="formControl"></input>
              <label htmlFor="destinationCity" className="form-label" >Destination City</label>
              <input type="text" id="destinationCity" className="formControl"></input>
              <label htmlFor="departDate" className="form-label" >Departure Date</label>
              <input type="date" id="departDate" className="formControl"></input>
              <label htmlFor="returnDate" className="form-label" >Return Date</label>
              <input type="date" id="returnDate" className="formControl light"></input>
              <label htmlFor="guestNum" className="form-label" >Number of travellers</label>
              <input type="number" min="1" id="guestNum" className="formControl light"></input>
              <button type="submit" className="btn btn-primary mb-3">Submit</button>
              </form>
            </div>
            <div className="tab-pane fade show" id="both-search-pane" role="tabpanel" aria-labelledby="BothSearchTab">
              Both Search Pane
              <form className="mb-3">
              <label htmlFor="departCityB" className="form-label" >Departing City</label>
              <input type="text" id="departCityB" className="formControl"></input>
              <label htmlFor="destinationCityB" className="form-label" >Destination City</label>
              <input type="text" id="destinationCityB" className="formControl"></input>
              <label htmlFor="departDateB" className="form-label" >Departure Date</label>
              <input type="date" id="departDateB" className="formControl"></input>
              <label htmlFor="returnDateB" className="form-label" >Return Date</label>
              <input type="date" id="returnDateB" className="formControl light"></input>
              <label htmlFor="guestNumB" className="form-label" >Number of travellers</label>
              <input type="number" min="1" id="guestNumB" className="formControl light"></input>
              <button type="submit" className="btn btn-primary mb-3">Submit</button>
              </form>
            </div>
            </div>
      </div>
      </section>
    )
}