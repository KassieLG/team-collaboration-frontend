import { useCustomer } from "../CustomerProvider"
export const CustomerID = () => {
    return (
<form>      
<table id="cart"  >
  <tr>
    <td className="requiredfield">First Name </td>
    <td className="requiredfield">Last Name</td>
  </tr>
  <tr>
    <td><input type="text" placeholder=" "/></td>
    <td><input type="text" placeholder=" "/></td>
  </tr>
  <tr>
    <td className="requiredfield">Email Address</td>
    <td className="requiredfield">Confirm Email Address</td>
  </tr>
  <tr>
    <td><input type="text" placeholder=" "/></td>
    <td><input type="text" placeholder=" "/></td>
  </tr>
</table>
</form>
    )
}