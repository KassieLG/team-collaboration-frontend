export const Header = () => {
    return <>
    <header>
      <div className="flex_space">
        <div className="logo">
          <img src="/Images/logo.jpg" alt="logo" />
        </div>
        <div className="content"> 
          <ul id="menulist" className="content">
            <li><a href="#home">Home</a> </li>
            <li><a href="#about">About</a> </li>
            <li><a href="#hotel">Hotel</a> </li>
            <li><a href="#flights">Flights</a> </li>
            <li><a href="#contact">contact</a> </li>
            <li>🔎</li>
            <li> <button>LOGIN</button> </li>
            <li> <button>REGISTER</button> </li>
          </ul>
        </div>
      </div>
    </header>
    <div>
    </div>
  <p><section className="book">
      <div className="container flex_space">
          <div className="text">
            <h1> Book Your Rooms and Flights</h1>
          </div>
          <div className="form">
            <form className="grid">
              <input type="text" placeholder="Location"/>
              <input type="date" placeholder="Araival Date"/>
              <input type="date" placeholder="Departure Date"/>
              <input type="number" placeholder="Adults"/>
              <input type="number" placeholder="Children"/>
              <input type="submit" value="Search"/>
            </form>
          </div>
        </div>
      </section></p>
    
    </>
}