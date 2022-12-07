/* eslint-disable @next/next/no-html-link-for-pages */


export const Header = () => {
    return <>
    <div className="bg">
    <header>
      <div className="flex_space">
        <div className="logo">
          <img src="/Images/logo.jpg" alt="logo" width='150' />
        </div>
        <div className="content"> 
          <ul id="menulist" className="content">
            <li><a href="/">Home</a> </li>
            <li><a href="about">About</a> </li>
            {/* <li><a href="hotelDetails">Hotel</a> </li>
            <li><a href="flightDetails">Flights</a> </li>
            <li><a href="contact">contact</a> </li>
            <li><a href="searchList">🔎</a> </li> */}
            <li> <button className='btn btn-primary' disabled>LOGIN</button> </li>
            <li> <button className='btn btn-info' disabled>REGISTER</button> </li>
            <li> <a href="cart"> <button className='btn btn-dark'>Cart 🛒</button></a> </li>
          </ul>
        </div>
      </div>
    </header>
    <div>
    </div>
      </div>
    </>
}