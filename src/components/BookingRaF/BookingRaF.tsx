export const BookingRaF = () => {
    return (
      <p><section className="book">
      <div className="container flex_space">
          <div className="text">
            <h1> Book Your Rooms and Flights</h1>
          </div>
          <div className="form">
            <form className="grid">
              <input type="text" placeholder="Location"/>
              <input type="date" placeholder="Arival Date"/>
              <input type="date" placeholder="Departure Date"/>
              <input type="number" placeholder="Adults"/>
              <input type="number" placeholder="Children"/>
              <input type="submit" value="Search"/>
            </form>
          </div>
        </div>
      </section></p>
    )
}