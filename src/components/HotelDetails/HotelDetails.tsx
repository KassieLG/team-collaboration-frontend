export const HotelDetails = () => {
    return (
        <div className="mtop">
        <div className="owl-carousel owl-carousel1 owl-theme">
          <div className="items">
            <div className="image">
            </div>
            <div className="text">
              <h2>Hotel Name</h2>
              <div>
                <h3>Location: </h3>
                <h3>Ratings/Reviews: ⭐⭐⭐⭐⭐</h3>
              </div>
            </div>
          </div>
          <div className="items">
            <div className="image">
            <img src="/Images/room1.jpg" alt="room1" min-width={500} height={500}/>
            <img src="/Images/room2.jpeg" alt="room2" min-width={500} height={500}/>
            <img src="/Images/room3.jpg" alt="room3" min-width={500} height={500}/>
            </div>
            <div className="button flex">
                <button className="primary-btn"><a href="CustomerID">BOOK NOW</a></button>
                <h3>$200 <span> Per Night </span> </h3>
              </div>
            <div>
              <ul>
                <li>Owner </li>
                <li>Hotel Other Details </li>
                <li>Room Facilities </li>
                <li>Services </li>
                <li>Review List </li>
                
          </ul>
            </div>
        </div>
        </div>
        </div>
    )
}