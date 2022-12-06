import { createContext, useContext, ReactNode, useState} from 'react'

type orderContextType={
    hotelID: number,
    hotelName:string,
    checkin:Date,
    checkout:Date,
    flightID: number,
    customerName:string,
    customerPass:string,
    customerEmail:string,
    customerDOB:Date,
    customerPhone:number
    setCustomer:(string:string)=>void;
}

const orderContextDefaults: orderContextType={
    hotelID: 0,
    hotelName:'',
    checkin: new Date(0),
    checkout:new Date(0),
    flightID: 0,
    customerName:'',
    customerPass:'',
    customerEmail:'',
    customerDOB:new Date(0),
    customerPhone:0,
    setCustomer:()=>{}
}

const OrderContext=createContext<orderContextType>(orderContextDefaults)

export function useOrder(){
    return useContext(OrderContext);
}

type Props ={
    children:ReactNode;
}
export function OrderProvider({children}:Props){
    
}
