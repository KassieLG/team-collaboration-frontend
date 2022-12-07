import { useCustomer } from "../CustomerProvider"
import { useState } from "react";
import Link from "next/link";
import Router from "next/router";
export const CustomerID = () => {
  const [fName, setFName] = useState(String);
  const [lName, setLName] = useState(String);
  const [phone, setPhone] = useState(Number);
  const [birth, setBirth] = useState(String);
  const [passport, setPassport] = useState(String);
  const [email, setEmail] = useState(String);

  const customerObject=useCustomer();
  
  
  const customerSubmit=(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    customerObject.setCustomer(fName,lName, passport, email, birth, phone)
    Router.push('/cart')
  })
    return (
<form onSubmit={customerSubmit}>      
<table id="cart" className="table">
  <tr>
    <td className="requiredfield">First Name </td>
    <td className="requiredfield">Last Name </td>
  </tr>
  <tr>
    <td><input type="text" name='first' className="form-control" onChange={(e)=>setFName(e.target.value)}/></td>
    <td><input type="text" name='last' className="form-control"onChange={(e)=>setLName(e.target.value)}/></td>
  </tr>
  <tr>
    <td className="requiredfield">Email Address</td>
    <td className="requiredfield">Confirm Email Address</td>
  </tr>
  <tr>
    <td><input type="text" name='emailAdd'className="form-control" onChange={(e)=>setEmail(e.target.value)}/></td>
    <td><input type="text" name='emailConf' className="form-control"/></td>
  </tr>

  <tr>
    <td className="requiredfield">Date of Birth </td>
    <td className="requiredfield">Phone Number</td>
  </tr>
  <tr>
    <td><input type="date" placeholder=" " name="DOB" className="form-control" onChange={(e)=>setBirth(e.target.value)}/></td>
    <td><input type="number" placeholder=" " name="phoneNum" className="form-control" onChange={(e)=>setPhone(Number.parseInt(e.target.value))}/></td>
  </tr>
  <tr>
    <td className="requiredfield">Passport Number</td>
    <td></td>
  </tr>
  <tr>
    <td><input type="text" name="passportNum" className="form-control" onChange={(e)=>setPassport(e.target.value)}/></td>
    
  </tr>
</table>
<td><button type="submit" >Submit</button></td>
</form>
    )
}