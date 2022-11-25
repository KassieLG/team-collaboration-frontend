export const Card = () => {
    return (
        <div className="mtop">
        <div className="owl-carousel owl-carousel1 owl-theme">
          <div className="items">
            <div className="image">
            </div>
            <div className="text">
              <h2>Suporior Rooms</h2>
              <div className="rate flex">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <div className="button flex">
                <button className="primary-btn">BOOK NOW</button>
                <h3>$200 <span> Per Night </span> </h3>
              </div>
            </div>
          </div>
          <div className="items">
            <div className="image">
            <img src="/Images/room1.jpg" alt="room1" width={700} height={500}/>
            </div>
            <div className="text">
              <h2>Room 1</h2>
              <div className="button flex">
                <button className="primary-btn">BOOK NOW</button>
                <h3>$250 <span> Per Night </span> </h3>
              </div>
            </div>
          </div>
          <div className="items">
            <div className="image">
            <img src="/Images/room2.jpeg" alt="room2" width={700} height={500}/>
            </div>
            <div className="text">
              <h2>Suporior Rooms</h2>              
              <div className="button flex">
                <button className="primary-btn">BOOK NOW</button>
                <h3>$110 <span> Per Night </span> </h3>
              </div>
            </div>
          </div>
          <div className="items">
            <div className="image">
            <img src="/Images/room3.jpg" alt="room3" width={700} height={500}/>
            </div>
            <div className="text">
              <div className="button flex">
                <button className="primary-btn">BOOK NOW</button>
                <h3>$150 <span> Per Night </span> </h3>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}