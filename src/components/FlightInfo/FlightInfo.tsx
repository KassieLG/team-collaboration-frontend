export const FlightInfo = () => {
    return (
<table id="cart" >
<tr>
<td><span className="bold">Flight number: xxxxxxxxxx</span></td>
</tr>
<tr>
<td className="text-align: left;"><span className="bold">Airline</span></td>
<td className="text-align: left;"><span className="bold">From</span></td>
<td className="text-align: left;"><span className="bold">To</span></td>
</tr>
<tr>
<td> <img src="/Images/aircanada.png" alt="airline"/></td>
<td className="text-align: left;">Toronto</td>
<td className="text-align: left;">Calgary</td>
</tr>
<tr className="background-color: #282929;">
<td className="text-align: left;"><span className="bold">Depart Time</span></td>
<td className="text-align: left;"><span className="bold">Duration</span></td>
<td className="text-align: left;"><span className="bold">Arrive Time</span></td>
</tr>
<tr className="background-color: #282929;">
<td className="text-align: left;">8:00 am</td>
<td className="text-align: left;">5 hours</td>
<td className="text-align: left;">1:00 pm</td>
</tr>
</table>
    )
}