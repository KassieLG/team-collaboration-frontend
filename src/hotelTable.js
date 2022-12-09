import React, { useState } from 'react'
import hotelTestData from '../testData/hotelTestData.json'
import { addFlight, addHotel } from './components/addItems';
import { useHotel } from './components/HotelProvider';
{/*handleAddition(row){
    if(row.hotel_id!=undefined){
        addHotel(row);
    }else if(row.flight_id!=undefined){
        addFlight(row);
    }

}*/}



export default class HotelTable extends React.Component {

    constructor(props){
        super(props);
        this.getHeader = this.getHeader.bind(this);
        this.getRowsData = this.getRowsData.bind(this);
        this.getKeys = this.getKeys.bind(this);
        }
        
        getKeys = function(){
            return Object.keys(this.props.data[0]);
        }
        
        getHeader = function(){
            var keys = this.getKeys();
            return keys.map((key, index) => {
                return <th key={key}>{key.toUpperCase()}</th>
            })
        }
        
        getRowsData = function(){
            var items = this.props.data;
            var keys = this.getKeys();
            return items.map((row, index)=>{
                return <tr key={index}><RenderRow key={index} data={row} keys={keys}/><td><button type='button' className='btn btn-primary' disabled onClick={()=>handleAddition(row)}>Select</button></td></tr>
            })
        
        }
        render() {
            if(this.props.data.length>0){
        return (
        <div>
            <table>
                <thead>
                    <tr>{this.getHeader()}</tr>
                </thead>
                <tbody>
                    {this.getRowsData()}
                </tbody>
            </table>
        </div>
        
        );}
        return
        }
       }
       const RenderRow = (props) =>{

        return props.keys.map((key, index)=>{
            return <td key={props.data[key]}>{props.data[key]}</td>
            })
           }
       
           const handleAddition=(row)=>{
            console.log(row);
            console.log(row.flight_id)
            if(row.hotel_id != undefined){
                console.log("Hotel")
                addHotel(row);
            }
            if(row.flight_id != undefined){
                console.log("Flight")
                addFlight(row)
            }
        }
