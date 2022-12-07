import React, { useState } from 'react'
import hotelTestData from '../testData/hotelTestData.json'


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
                return <tr key={index}><RenderRow key={index} data={row} keys={keys}/><td><button type='button'>Select</button></td></tr>
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
       
    
