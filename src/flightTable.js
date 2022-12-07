import { Button } from 'bootstrap';
import React from 'react'
import flightTestData from '../testData/flightTestData.json'


export default class FlightTable extends React.Component {
    constructor(props){
        super(props);
        this.getHeader = this.getHeader.bind(this);
        this.getRowsData = this.getRowsData.bind(this);
        this.getKeys = this.getKeys.bind(this);
        }
        
        getKeys = function(){
            return Object.keys(flightTestData[0]);
        }
        
        getHeader = function(){
            var keys = this.getKeys();
            return keys.map((key, index) => {
                return <th key={key}>{key.toUpperCase()} </th>
            })
        }
        
        getRowsData = function(){
            var items = flightTestData;
            var keys = this.getKeys();
            return items.map((row, index)=>{
                return <tr key={index}><RenderRow key={index} data={row} keys={keys}/><td><button>Book</button></td></tr>
            })
        
        }
        
        render() {
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
        
        );
        }
       }
       const RenderRow = (props) =>{
        return props.keys.map((key, index)=>{
            return <td key={props.data[key]}>{props.data[key]}</td>
            })
           }
       
    
